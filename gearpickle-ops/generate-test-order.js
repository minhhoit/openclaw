const fs = require('fs');
const path = require('path');

// Tạo file đơn hàng mẫu cho GearPickle
const testOrder = {
  "order_id": "TEST-20260724-001",
  "status": "completed",
  "platform": "CJ",
  "items": [
    {
      "product_id": "GP-123",
      "name": "Pickleball Paddle",
      "quantity": 1,
      "price": 49.99
    }
  ],
  "tracking": {
    "sub_id": "gearpickle-test",
    "source": "content"
  },
  "timestamp": new Date().toISOString()
};

// Lưu file mẫu
const outputPath = path.join(__dirname, 'test-order-20260724.json');
fs.writeFileSync(outputPath, JSON.stringify(testOrder, null, 2));

console.log(`✅ Đã tạo file mẫu tại: ${outputPath}`);
console.log('Bạn chỉ cần chạy lệnh sau để kích hoạt agent:');
console.log('openclaw file write --path "gearpickle-ops/test-order.json" --content "<nội_dung_file>"');