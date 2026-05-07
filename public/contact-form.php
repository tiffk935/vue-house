<?php
header('Content-Type: application/json; charset=utf-8');

$case_code = "gempark";

$name           = isset($_POST['name']) ? $_POST['name'] : '';
$phone          = isset($_POST['phone']) ? $_POST['phone'] : '';
$email          = isset($_POST['email']) ? $_POST['email'] : '';
$city           = isset($_POST['city']) ? $_POST['city'] : '';
$area           = isset($_POST['area']) ? $_POST['area'] : '';
$room_type      = isset($_POST['room_type']) ? $_POST['room_type'] : '';
$budget         = isset($_POST['budget']) ? $_POST['budget'] : '';
$msg            = isset($_POST['msg']) ? $_POST['msg'] : '';
$utm_source     = isset($_POST['utm_source']) ? $_POST['utm_source'] : '';
$utm_medium     = isset($_POST['utm_medium']) ? $_POST['utm_medium'] : '';
$utm_content    = isset($_POST['utm_content']) ? $_POST['utm_content'] : '';
$utm_campaign   = isset($_POST['utm_campaign']) ? $_POST['utm_campaign'] : '';
$datetime       = date('Y-m-d H:i:s');

// 檢查必填
if (empty($name) || empty($phone)) {
    echo json_encode(array(
        'success' => false
    ));
    die();
}

// 聯碩 API
$url = 'https://api.unigiants.com.tw/v3/api.php';
$data = array(
    // 必填
    'api_key'       => '4ptbEgy4QZBjLJbV5MA7gLzkCZ98sN9Ufqei8a4Z',
    'name'          => $name,         // 客戶姓名
    'phone'         => $phone,        // 客戶電話（09 開頭，共 10 碼，例如：0912345678）
    // 選填
    'case_code'     => $case_code,    // 案件編號
    'email'         => $email,        // 客戶 Email
    'city'          => $city,         // 居住城市（例如：台北市）
    'district'      => $area,         // 行政區（例如：大安區）
    'room_type'     => $room_type,    // 需求房型（例如：三房電梯）
    'budget'        => $budget,       // 預算範圍（例如：2000-3000萬）
    'message'       => $msg,          // 客戶留言
    'utm_source'    => $utm_source,   // 廣告來源（例如：google）
    'utm_medium'    => $utm_medium,   // 廣告媒介（例如：cpc）
    'utm_campaign'  => $utm_campaign, // 廣告活動名稱
    'utm_content'   => $utm_content,  // 廣告內容
);

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_REFERER, 'https://gempark.com.tw');

$response = curl_exec($ch);
curl_close($ch);

$response = json_decode($response, true);

echo json_encode(array(
    'success' => $response['success']
));