// 현재 페이지의 타이틀에 따라 버튼 배경색을 변경하는 함수
function changeButtonColor() {
  const button = document.getElementById('submit_assign');
  const currentPageTitle = document.title;

  // 현재 페이지 타이틀에 따라 버튼 배경색 변경
  if (currentPageTitle === 'submit_assign_page') {
      button.style.backgroundColor = '#f0bf83';
  }
}

// 페이지 로드 시 버튼 배경색 변경
window.onload = changeButtonColor;