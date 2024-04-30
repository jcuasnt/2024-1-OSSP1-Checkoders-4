function redirectToPage() {
  // 이동할 페이지의 URL을 설정
  var pageUrl = "https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&prompt=login";
  
  // 페이지로 이동
  window.location.href = pageUrl;
}