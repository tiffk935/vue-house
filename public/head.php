<?php

$meta = json_decode(file_get_contents('meta.json'), true);
$request_uri = $_SERVER['REQUEST_URI'];
$path = parse_url($request_uri, PHP_URL_PATH);

if ($path !== '/' && substr($path, -1) !== '/') {
    $path = $path . '/';
}

if (strpos($path, '/news/') !== false || strpos($path, '/projects/') !== false) {
    $path = '/news/';
}

$filter = array_filter($meta, function($v) use ($path) {
    return $v['path'] == $path;
});
$filter = array_values($filter);

$defaultMeta = array_filter($meta, function($v) use ($path) {
    return $v['path'] == '*';
});
$defaultMeta = array_values($defaultMeta);

$metaData = $defaultMeta[0];
if (count($filter) > 0) {
    $metaData = $filter[0];
}

$docTitle = $metaData['title'];
$siteName = $metaData['title'];
$docDesc = $metaData['description'];
$keyWords = $metaData['keywords'];

?>
<title><?php echo $docTitle; ?></title>
<meta name="description" content="<?php echo $docDesc ?>">
<meta name="keywords" content="<?php echo $keyWords ?>">
<meta property="og:locale" content="zh_TW" />
<meta property="og:type" content="website" />
<meta property="og:title" content="<?php echo $docTitle; ?>" />
<meta property="og:description" content="<?php echo $docDesc ?>" />
<meta property="og:site_name" content="<?php echo $siteName; ?>" />
<meta name="twitter:description" content="<?php echo $docDesc ?>" />
<meta name="twitter:title" content="<?php echo $docTitle; ?>" />
<meta itemprop="name" content="<?php echo $docTitle; ?>">
<meta itemprop="description" content="<?php echo $docDesc ?>">

<link 
  rel="preload" 
  as="image" 
  href="/assets/1m-Q0fdVBqo.webp" 
  media="(max-width: 767px)" 
  fetchpriority="high">

<link 
  rel="preload" 
  as="image" 
  href="/assets/1-CeRhDxFc.webp" 
  media="(min-width: 768px)" 
  fetchpriority="high">