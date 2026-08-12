# PowerShell script kiểm tra doanh thu affiliate
param([string]$targetDate = (Get-Date).ToString('yyyy-MM-dd'))
$ga4Path = Join-Path $pwd 'repos\onmeevn\data\ga4' | Resolve-Path -ErrorAction Stop

# Kiểm tra file affiliate-events
$affiliateFile = Get-ChildItem $ga4Path | Where-Object Name -eq "affiliate-events-$targetDate.json"

# Kiểm tra file orders_daily
$ordersFile = Get-ChildItem $ga4Path | Where-Object Name -eq "$targetDate.json"

if (-not $affiliateFile -or -not $ordersFile) {
    Write-Output "❌ Thiếu file dữ liệu cho ngày $targetDate"
    exit 1
}

# Tính tổng doanh thu
$affiliateData = Get-Content $affiliateFile | ConvertFrom-Json
$ordersData = Get-Content $ordersFile | ConvertFrom-Json

$shopeeRevenue = ($affiliateData | Where-Object { $_.platform -eq 'shopee' }).revenue | Measure-Object -Sum | Select-Object -ExpandProperty Sum
$shopifyRevenue = ($ordersData.sales | Measure-Object -Property amount -Sum).Sum

$totalRevenue = [math]::Round($shopeeRevenue + $shopifyRevenue, 2)

if ($totalRevenue -ge 10) {
    Write-Output "✅ ĐẠT MỤC TIÊU $${totalRevenue}`n• Shopee: $${shopeeRevenue}`n• Shopify: $${shopifyRevenue}"
} else {
    Write-Output "⚠️ THIẾU MỤC TIÊU ($${totalRevenue}/$10)`n• Shopee: $${shopeeRevenue}`n• Shopify: $${shopifyRevenue}"
}