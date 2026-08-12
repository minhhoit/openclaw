# Báo cáo Hoạt động Affiliate - 27/07/2026

**Trạng thái**: Thất bại  
**Lý do**: Lỗi script kiểm tra placeholder do không tương thích với Windows.

## Tóm tắt
- **Báo cáo Shopee**: Đã xử lý thành công (affiliate-ops\shopee-dashboard-summary.md)
- **Kiểm tra CTA**: Đạt (0 trang vượt ngưỡng)
- **Kiểm tra Placeholder**: Thất bại (exit code 1)

## Chi phí
- **Tổng chi phí**: 0 VND (không sử dụng dịch vụ bên ngoài)

## Vấn đề chặn
- Script `check-placeholders.sh` thất bại vì là script bash không tương thích với Windows. Lỗi: `Bash/Service/CreateInstance/CreateVm/HCS/ERROR_NOT_SUPPORTED`.

## Hành động cần Robert
Robert cần:
1. Cung cấp phiên bản script tương thích Windows (ví dụ: PowerShell script), hoặc
2. Cấu hình WSL để chạy script bash, hoặc
3. Điều chỉnh quy trình kiểm tra để bỏ qua bước này nếu không áp dụng.