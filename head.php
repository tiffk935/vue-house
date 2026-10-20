<?php
$data = [
    'src' => 'https://shouyao.tw/',
    'title' => '佳鋐首耀｜車站商圈｜雙軌道捷運宅｜官網',
    'description' => '佳鋐首耀：中華路 X 台灣大道，2-3房純靜4併，26-38坪雙面採光捷運宅；接待中心：台中市梧棲區中華路二段207號 即刻預約：04-26630999',
    'keyword' => '佳鋐首耀 ,佳鋐建設梧棲,佳鋐建設沙鹿,梧棲新案,沙鹿新案'
];

$docTitle = $data['title'];
$siteName = $data['title'];
$docDesc = $data['description'];
$keyWords = $data['keyword'];
$ogType = 'website';
$shareUrl = $data['src'];
?>

<title><?php echo $docTitle; ?></title>
<meta name="description" content="<?php echo $docDesc ?>">
<meta name="keywords" content="<?php echo $keyWords ?>">
<link rel="canonical" href="<?php echo $shareUrl; ?>">
<meta property="og:image" content="https://shouyao.tw/og.jpg" />

<!-- Open Graph -->
<meta property="og:locale" content="zh_TW" />
<meta property="og:type" content="<?php echo $ogType ?>" />
<meta property="og:title" content="<?php echo $docTitle; ?>" />
<meta property="og:description" content="<?php echo $docDesc ?>" />
<meta property="og:site_name" content="<?php echo $siteName; ?>" />
<meta property="og:url" content="<?php echo $shareUrl; ?>" />

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="<?php echo $docTitle; ?>" />
<meta name="twitter:description" content="<?php echo $docDesc ?>" />

<!-- Schema.org -->
<meta itemprop="name" content="<?php echo $docTitle; ?>">
<meta itemprop="description" content="<?php echo $docDesc ?>">