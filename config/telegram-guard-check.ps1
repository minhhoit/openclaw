# telegram-guard-check.ps1
# Guard layer for Telegram inbound messages
# Returns exit code 0 if message matches allowed keywords, 1 otherwise.

param(
    [string]$Message = $null
)

if ([string]::IsNullOrWhiteSpace($Message)) {
    Write-Host "[guard] No message provided. Rejecting."
    exit 1
}

# Load guard config
$configPath = "$PSScriptRoot\telegram-guard.json"
if (-not (Test-Path $configPath)) {
    Write-Host "[guard] Config not found at $configPath. Rejecting by default."
    exit 1
}

try {
    $config = Get-Content $configPath | ConvertFrom-Json
    if (-not $config.enabled) {
        Write-Host "[guard] Guard disabled in config. Rejecting."
        exit 1
    }
} catch {
    Write-Host "[guard] Failed to parse config: $($_.Exception.Message). Rejecting."
    exit 1
}

# Normalize message for case-insensitive, trim, and basic cleanup
$normalized = $Message.Trim().ToLower()

# Check against allowed keywords
$matched = $false
foreach ($keyword in $config.allowed_keywords) {
    $keywordClean = $keyword.Trim().ToLower()
    if ($normalized -match [regex]::Escape($keywordClean) -or $normalized -like "*$keywordClean*") {
        $matched = $true
        break
    }
}

if ($matched) {
    Write-Host "[guard] ✅ Message matches keyword. Allowing."
    exit 0
} else {
    Write-Host "[guard] ❌ No keyword match. Blocking silently."
    exit 1
}
