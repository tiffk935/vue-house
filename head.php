<?php
# 2025/5/19
#直接定義靜態資料
$data = [
    'src' => 'https://shih-jhu.tw/',
    'title' => '小城故事8｜鄰梅花湖60-67坪電梯別墅社區｜官網',
    'description' => '小城故事8：宜蘭首選，電梯別墅。有天有地高質感社區管理，雙主臥4套房，私有開心農場，自住渡假置產。預約專線：0900-799-888',
    'keyword' => '小城故事8,宜蘭建案,宜蘭預售屋,羅東買房,電梯別墅'
];

$docTitle = $data['title'];
$siteName = $data['title'];
$docDesc = $data['description'];
$keyWords = $data['keyword'];
$ogType = 'website';
?>

<title><?php echo $docTitle; ?></title>
<meta name="description" content="<?php echo $docDesc ?>">
<meta name="keywords" content="<?php echo $keyWords ?>">
<meta property="og:locale" content="zh_TW" />
<meta property="og:type" content="<?php echo $ogType ?>" />
<meta property="og:title" content="<?php echo $docTitle; ?>" />
<meta property="og:description" content="<?php echo $docDesc ?>" />
<meta property="og:site_name" content="<?php echo $siteName; ?>" />
<meta property="og:image" content="<?php echo $src; ?>og.jpg" />
<meta name="twitter:description" content="<?php echo $docDesc ?>" />
<meta name="twitter:title" content="<?php echo $docTitle; ?>" />
<meta itemprop="name" content="<?php echo $docTitle; ?>">
<meta itemprop="description" content="<?php echo $docDesc ?>">