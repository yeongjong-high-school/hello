<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <title>TODO 캘린더 & 친환경 챌린지</title>
  <style>
    /* --- 공통 Body 및 기본 스타일 --- */
    body {
      margin: 0;
      padding: 0;
      font-family: 'Noto Sans KR', 'Arial', sans-serif; /* 두 폰트 모두 포함, Noto Sans KR 우선 */
      background-color: #f0f4f8; /* 캘린더 배경색 기본 사용 */
      display: flex;
      flex-direction: column;
      align-items: center;
      min-height: 100vh;
      color: #333; /* 챌린지 기본 텍스트 색상 */
    }

    /* --- 네비게이션 바 스타일 --- */
    #main-nav {
      width: 100%;
      text-align: center;
      padding: 20px 0;
      background-color: #e8f5e9; /* 챌린지 네비 배경색 사용 */
      box-sizing: border-box;
      margin-bottom: 20px;
      border-bottom: 2px solid #a8d5ba;
    }
    #main-nav a {
      font-weight: bold;
      text-decoration: none;
      font-size: 1.2em; /* 크기 살짝 키움 */
      padding: 10px 20px; /* 패딩 조정 */
      border-radius: 8px;
      transition: background-color 0.3s, color 0.3s;
      margin: 0 10px;
      color: #2e7d32; /* 기본 링크 색상 */
    }
    #main-nav a.active {
      background-color: #388e3c;
      color: #ffffff;
    }
    #main-nav a:not(.active):hover {
      background-color: #c8e6c9;
    }

    /* --- 섹션 공통 스타일 --- */
    .content-section {
      width: 100%;
      display: flex; /* 내부 컨텐츠 중앙 정렬을 위해 */
      flex-direction: column;
      align-items: center;
    }


    /* --- TODO 캘린더 섹션 스타일 --- */
    #calendar-section {
      /* 이 섹션은 내부 요소들이 max-width를 가짐 */
    }
    #calendar-section header { /* 캘린더의 header 태그 */
      width: 100%;
      max-width: 480px;
      background-color: #a8d5ba;
      color: #2a5d4e;
      text-align: center;
      padding: 20px 0;
      font-size: 2.5rem;
      font-weight: bold;
      box-shadow: 0 3px 6px rgba(0,0,0,0.1);
      border-radius: 12px;
      user-select: none;
      margin-bottom: 20px;
    }
    #calendar-section .calendar {
      width: 100%;
      max-width: 480px;
      background: white;
      border-radius: 12px;
      box-shadow: 0 6px 15px rgba(0,0,0,0.1);
      padding: 20px;
      user-select: none;
      box-sizing: border-box;
    }
    #calendar-section .calendar-header {
      text-align: center;
      font-weight: 600;
      color: #2a5d4e;
      font-size: 1.3rem;
      margin-bottom: 12px;
    }
    #calendar-section .calendar-weekdays {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      text-align: center;
      color: #7cb99e;
      font-weight: 600;
      margin-bottom: 8px;
      user-select: none;
    }
    #calendar-section .calendar-days {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 8px;
    }
    #calendar-section .calendar-day {
      padding: 10px;
      border-radius: 8px;
      text-align: center;
      cursor: pointer;
      font-weight: 500;
      user-select: none;
      border: 2px solid transparent;
      transition: background-color 0.3s ease, border-color 0.3s ease;
      min-height: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      box-sizing: border-box;
    }
    #calendar-section .calendar-day:hover {
      background-color: #d6eadf;
    }
    #calendar-section .calendar-day.today {
      border-color: #7cb99e;
      font-weight: 700;
      background-color: #e8f5e9;
    }
    #calendar-section .calendar-day.selected {
      background-color: #a8d5ba;
      color: white;
      font-weight: 700;
    }
    #calendar-section .calendar-day.selected .todo-preview {
        color: #f0f4f8;
    }
    #calendar-section .calendar-day.empty {
      cursor: default;
      background-color: transparent;
      border-color: transparent;
    }
    #calendar-section .calendar-day.empty:hover {
      background-color: transparent;
    }
    #calendar-section .todo-preview {
      font-size: 0.75rem;
      color: #4b7053;
      margin-top: 4px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
      padding: 0 2px;
    }
    #calendar-section .todo-container {
      margin-top: 20px;
      width: 100%;
      max-width: 480px;
      box-sizing: border-box;
    }
    #calendar-section .todo-container h2 {
      color: #2a5d4e;
      font-weight: 700;
      margin-bottom: 10px;
      user-select: none;
      font-size: 1.5rem;
    }
    #calendar-section .input-area {
      display: flex;
      margin-bottom: 15px;
    }
    #calendar-section #input { /* ID 사용 */
      flex-grow: 1;
      padding: 12px 15px;
      font-size: 1.1rem;
      border: 2px solid #a8d5ba;
      border-radius: 8px 0 0 8px;
      outline: none;
      transition: border-color 0.3s ease;
    }
    #calendar-section #input:focus {
      border-color: #7cb99e;
      box-shadow: 0 0 8px rgba(124,185,158,0.5);
    }
    #calendar-section #add-btn { /* ID 사용 */
      padding: 12px 20px;
      font-size: 1.1rem;
      background-color: #a8d5ba;
      color: #2a5d4e;
      border: none;
      border-radius: 0 8px 8px 0;
      cursor: pointer;
      transition: background-color 0.3s ease;
      font-weight: 600;
    }
    #calendar-section #add-btn:hover {
      background-color: #7cb99e;
    }
    #calendar-section #add-btn:disabled {
        background-color: #d0d0d0;
        cursor: not-allowed;
    }
    #calendar-section #output { /* ID 사용 */
      list-style: none;
      padding: 0;
      margin: 0;
      max-height: 280px;
      overflow-y: auto;
    }
    #calendar-section #output::-webkit-scrollbar { width: 8px; }
    #calendar-section #output::-webkit-scrollbar-track { background: #f0f4f8; border-radius: 4px; }
    #calendar-section #output::-webkit-scrollbar-thumb { background: #a8d5ba; border-radius: 4px; }
    #calendar-section #output::-webkit-scrollbar-thumb:hover { background: #7cb99e; }
    #calendar-section #output li {
      background-color: white;
      border: 1px solid #a8d5ba;
      border-radius: 8px;
      padding: 14px 18px;
      font-size: 1.1rem;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      user-select: none;
      transition: background-color 0.2s ease, border-color 0.2s ease;
      position: relative;
    }
    #calendar-section #output li.done {
      text-decoration: line-through;
      color: #7cb99e;
      border-color: #d6eadf;
      background-color: #e8f5e9;
    }
    #calendar-section #output li.done span { opacity: 0.7; }
    #calendar-section #output li input[type="checkbox"] {
      margin-right: 15px;
      width: 20px;
      height: 20px;
      cursor: pointer;
      accent-color: #2a5d4e;
    }
    #calendar-section #output li span {
        flex-grow: 1;
        word-break: break-all;
    }
    #calendar-section .delete-btn {
        background: none;
        border: none;
        color: #ff6b6b;
        font-size: 1.2rem;
        font-weight: bold;
        cursor: pointer;
        padding: 5px;
        margin-left: 10px;
        opacity: 0.5;
        transition: opacity 0.2s ease;
    }
    #calendar-section #output li:hover .delete-btn { opacity: 1; }


    /* --- 친환경 챌린지 섹션 스타일 --- */
    #challenge-section {
      padding: 0 20px 30px 20px; /* 상하좌우 패딩 조정 */
      box-sizing: border-box;
      width: 100%;
    }
    #challenge-section h1, #challenge-section h2 { /* 챌린지 h1, h2 */
      color: #2e7d32;
      text-align: center;
      margin-bottom: 30px;
      text-shadow: 1px 1px 3px #a5d6a7;
    }
    #challenge-section #challengeContainer {
      display: flex;
      gap: 20px;
      justify-content: center;
      margin-bottom: 30px;
      flex-wrap: wrap;
    }
    #challenge-section .challenge {
      background: #ffffff;
      border-radius: 12px;
      box-shadow: 0 4px 8px rgba(46, 125, 50, 0.15);
      padding: 20px 25px;
      width: 100%; /* 모바일에서 꽉차게 */
      max-width: 300px; /* 최대 너비 */
      display: flex;
      align-items: center;
      cursor: pointer;
      transition: transform 0.15s ease, box-shadow 0.15s ease;
      user-select: none;
      box-sizing: border-box;
    }
    #challenge-section .challenge:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 15px rgba(46, 125, 50, 0.3);
    }
    #challenge-section .challenge input[type="checkbox"] {
      margin-right: 18px;
      width: 22px;
      height: 22px;
      cursor: pointer;
      accent-color: #388e3c;
    }
    #challenge-section .challenge span {
      font-size: 16px;
      line-height: 1.4;
      flex: 1;
    }
    #challenge-section #points {
      text-align: center;
      font-size: 22px;
      color: #1b5e20;
      margin-bottom: 40px;
      font-weight: 600;
      text-shadow: 1px 1px 2px #a5d6a7;
    }
    #challenge-section #items, #challenge-section #certifyFeed {
      max-width: 700px;
      margin: 0 auto 30px auto;
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      justify-content: center;
    }
    #challenge-section .item {
      background: #e8f5e9;
      border: 2px solid #a5d6a7;
      border-radius: 12px;
      padding: 15px 20px;
      width: 100%; /* 모바일에서 꽉차게 */
      max-width: 200px; /* 최대 너비 */
      box-shadow: 0 3px 6px rgba(165, 214, 167, 0.4);
      display: flex;
      flex-direction: column;
      align-items: center;
      font-weight: 600;
      color: #2e7d32;
      user-select: none;
      transition: background 0.3s ease;
      box-sizing: border-box;
    }
    #challenge-section .item button {
      margin-top: 12px;
      padding: 8px 14px;
      background-color: #388e3c;
      border: none;
      border-radius: 8px;
      color: white;
      cursor: pointer;
      font-weight: 600;
      font-size: 14px;
      transition: background-color 0.25s ease;
    }
    #challenge-section .item button:hover {
      background-color: #2e7d32;
    }
    #challenge-section #purchasedItems {
      max-width: 700px;
      margin: 0 auto 40px auto;
      padding-left: 20px;
      color: #33691e;
      font-weight: 600;
      font-size: 16px;
      list-style-type: disc;
    }
    #challenge-section #purchasedItems li { margin-bottom: 5px; }
    #challenge-section #resetBtn {
      display: block;
      margin: 30px auto;
      background-color: #4caf50;
      border: none;
      padding: 14px 26px;
      font-size: 18px;
      color: white;
      border-radius: 12px;
      cursor: pointer;
      font-weight: 700;
      box-shadow: 0 5px 12px rgba(76, 175, 80, 0.5);
      transition: background-color 0.3s ease;
      user-select: none;
    }
    #challenge-section #resetBtn:hover {
      background-color: #388e3c;
    }
    #challenge-section #certifyForm {
        max-width:700px;
        margin:0 auto 30px;
        background: #fff;
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 4px 8px rgba(46, 125, 50, 0.1);
    }
    #challenge-section #certifyForm textarea {
      width: 100%;
      padding: 12px;
      border-radius: 10px;
      border: 1px solid #ccc;
      margin-bottom: 10px;
      box-sizing: border-box;
    }
    #challenge-section #certifyForm input[type="file"] {
      margin-bottom: 10px;
      display: block;
    }
    #challenge-section #postBtn { /* 챌린지의 postBtn */
      padding: 10px 20px;
      background-color: #2e7d32;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 600;
      transition: background-color 0.25s ease;
    }
    #challenge-section #postBtn:hover {
        background-color: #1b5e20;
    }
    #challenge-section #certifyFeed div.feed-card {
      width: 100%;
      box-sizing: border-box;
      background: white;
      border: 1px solid #c8e6c9;
      border-radius: 12px;
      box-shadow: 0 3px 6px rgba(0,0,0,0.1);
      padding: 15px 20px;
      display: flex;
      flex-direction: column;
      margin-bottom: 15px; /* 카드 간 간격 */
    }
  </style>
</head>
<body>

  <nav id="main-nav">
    <a href="#" id="nav-calendar" class="active">TODO 캘린더</a>
    <a href="#" id="nav-challenge">친환경 챌린지</a>
  </nav>

  <div id="calendar-section" class="content-section">
    <header>2025년 5월 TODO 캘린더</header>
    <div class="calendar">
      <div class="calendar-header">2025년 5월</div>
      <div class="calendar-weekdays">
        <div>일</div><div>월</div><div>화</div><div>수</div><div>목</div><div>금</div><div>토</div>
      </div>
      <div class="calendar-days" id="calendar-days"></div>
    </div>
    <div class="todo-container">
      <h2 id="selected-date-title">날짜를 선택하세요</h2>
      <div class="input-area">
        <input id="input" type="text" placeholder="할 일을 입력하세요" disabled />
        <button id="add-btn" disabled>추가</button>
      </div>
      <ul id="output"></ul>
    </div>
  </div>

  <div id="challenge-section" class="content-section" style="display: none;">
    <h1>친환경 챌린지</h1>
    <div id="challengeContainer"></div>
    <div id="points">포인트: 0</div>
    <h2>구매 가능한 아이템</h2>
    <div id="items"></div>
    <h2>구매 내역</h2>
    <ul id="purchasedItems"></ul>
    <button id="resetBtn">새 챌린지 시작하기</button>
    <h2>챌린지 인증하기</h2>
    <div id="certifyForm">
      <textarea id="certifyText" rows="4" placeholder="챌린지 내용을 입력하세요 (예: 오늘 텀블러 사용 인증!)"></textarea>
      <input type="file" id="certifyImage" accept="image/*">
      <button id="postBtn">인증 게시</button>
    </div>
    <h2>인증 피드</h2>
    <div id="certifyFeed"></div>
  </div>

  <script>
    document.addEventListener('DOMContentLoaded', () => {
      // --- 네비게이션 및 섹션 전환 로직 ---
      const navCalendarLink = document.getElementById('nav-calendar');
      const navChallengeLink = document.getElementById('nav-challenge');
      const calendarSectionDiv = document.getElementById('calendar-section');
      const challengeSectionDiv = document.getElementById('challenge-section');

      function showCalendarSection() {
        calendarSectionDiv.style.display = 'flex'; // 캘린더 섹션은 flex로 정렬
        challengeSectionDiv.style.display = 'none';
        navCalendarLink.classList.add('active');
        navChallengeLink.classList.remove('active');
      }

      function showChallengeSection() {
        calendarSectionDiv.style.display = 'none';
        challengeSectionDiv.style.display = 'block'; // 챌린지 섹션은 block
        navCalendarLink.classList.remove('active');
        navChallengeLink.classList.add('active');
      }

      navCalendarLink.addEventListener('click', (e) => {
        e.preventDefault();
        showCalendarSection();
      });

      navChallengeLink.addEventListener('click', (e) => {
        e.preventDefault();
        showChallengeSection();
      });

      // --- TODO 캘린더 스크립트 ---
      const calendarDaysEl = document.getElementById('calendar-days');
      const calendarSelectedDateTitle = document.getElementById('selected-date-title'); // 이름 변경 (충돌 방지)
      const calendarInput = document.getElementById('input'); // 이름 변경
      const calendarAddBtn = document.getElementById('add-btn'); // 이름 변경
      const calendarOutput = document.getElementById('output'); // 이름 변경

      const calendarYear = 2025;
      const calendarMonth = 4; // 5월은 4 (0부터 시작)
      const calendarToday = new Date();

      let calendarSelectedDate = null;
      let calendarTodosByDate = {};

      function calendarLoadTodos() {
        const saved = localStorage.getItem('todosByDate_2025_May');
        if (saved) calendarTodosByDate = JSON.parse(saved);
      }

      function calendarSaveTodos() {
        localStorage.setItem('todosByDate_2025_May', JSON.stringify(calendarTodosByDate));
      }

      function calendarFormatDate(year, month, day) {
        return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      }

      function calendarRenderCalendar() {
        calendarDaysEl.innerHTML = '';
        const firstDayOfMonth = new Date(calendarYear, calendarMonth, 1).getDay();
        const lastDateOfMonth = new Date(calendarYear, calendarMonth + 1, 0).getDate();

        for (let i = 0; i < firstDayOfMonth; i++) {
          const emptyCell = document.createElement('div');
          emptyCell.classList.add('calendar-day', 'empty');
          calendarDaysEl.appendChild(emptyCell);
        }

        for (let day = 1; day <= lastDateOfMonth; day++) {
          const dateCell = document.createElement('div');
          dateCell.classList.add('calendar-day');
          const dateStr = calendarFormatDate(calendarYear, calendarMonth, day);
          dateCell.innerHTML = `<div>${day}</div>`;

          const todosForDay = calendarTodosByDate[dateStr] || [];
          if (todosForDay.length > 0) {
            const preview = document.createElement('div');
            preview.className = 'todo-preview';
            let previewText = todosForDay[0].text;
            if (previewText.length > 8) previewText = previewText.slice(0, 8) + '…';
            preview.textContent = previewText;
            if (todosForDay[0].done) {
              preview.style.textDecoration = 'line-through';
              preview.style.color = '#aaa';
            }
            if (todosForDay.length > 1) {
               preview.textContent += ` 외 ${todosForDay.length -1}개`;
            }
            dateCell.appendChild(preview);
          }

          if (calendarToday.getFullYear() === calendarYear && calendarToday.getMonth() === calendarMonth && calendarToday.getDate() === day) {
            dateCell.classList.add('today');
          }
          if (calendarSelectedDate === dateStr) {
            dateCell.classList.add('selected');
          }

          dateCell.addEventListener('click', () => {
            const previouslySelected = calendarDaysEl.querySelector('.selected');
            if (previouslySelected) previouslySelected.classList.remove('selected');
            dateCell.classList.add('selected');
            calendarSelectedDate = dateStr;
            calendarRenderTodos();
            calendarInput.disabled = false;
            calendarAddBtn.disabled = false;
            calendarInput.focus();
          });
          calendarDaysEl.appendChild(dateCell);
        }
      }

      function calendarRenderTodos() {
        calendarOutput.innerHTML = '';
        if (!calendarSelectedDate) {
          calendarSelectedDateTitle.textContent = '날짜를 선택하세요';
          calendarInput.value = '';
          calendarInput.disabled = true;
          calendarAddBtn.disabled = true;
          return;
        }
        calendarSelectedDateTitle.textContent = `${calendarSelectedDate} 할 일 목록`;
        const todos = calendarTodosByDate[calendarSelectedDate] || [];

        if (todos.length === 0) {
          const emptyMsg = document.createElement('li');
          emptyMsg.textContent = '할 일이 없습니다. 추가해보세요!';
          emptyMsg.style.cssText = 'text-align:center; color:#888; cursor:default; border:none; background:transparent;';
          calendarOutput.appendChild(emptyMsg);
          return;
        }

        todos.forEach((todo, index) => {
          const li = document.createElement('li');
          if (todo.done) li.classList.add('done');
          const checkbox = document.createElement('input');
          checkbox.type = 'checkbox';
          checkbox.checked = todo.done;
          checkbox.addEventListener('change', () => {
            todos[index].done = checkbox.checked;
            calendarSaveTodos();
            calendarRenderTodos();
            calendarRenderCalendar();
          });
          const span = document.createElement('span');
          span.textContent = todo.text;
          const deleteBtn = document.createElement('button');
          deleteBtn.classList.add('delete-btn');
          deleteBtn.innerHTML = '×';
          deleteBtn.title = "삭제";
          deleteBtn.addEventListener('click', () => calendarDeleteTodo(index));
          li.appendChild(checkbox);
          li.appendChild(span);
          li.appendChild(deleteBtn);
          calendarOutput.appendChild(li);
        });
      }

      function calendarAddTodo() {
        const text = calendarInput.value.trim();
        if (!text || !calendarSelectedDate) return;
        if (!calendarTodosByDate[calendarSelectedDate]) calendarTodosByDate[calendarSelectedDate] = [];
        calendarTodosByDate[calendarSelectedDate].push({ text, done: false });
        calendarSaveTodos();
        calendarRenderTodos();
        calendarRenderCalendar();
        calendarInput.value = '';
        calendarInput.focus();
      }

      function calendarDeleteTodo(index) {
        if (!calendarSelectedDate || !calendarTodosByDate[calendarSelectedDate]) return;
        calendarTodosByDate[calendarSelectedDate].splice(index, 1);
        if (calendarTodosByDate[calendarSelectedDate].length === 0) delete calendarTodosByDate[calendarSelectedDate];
        calendarSaveTodos();
        calendarRenderTodos();
        calendarRenderCalendar();
      }

      calendarAddBtn.addEventListener('click', calendarAddTodo);
      calendarInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !calendarInput.disabled) calendarAddTodo();
      });

      calendarLoadTodos();
      calendarRenderCalendar();
      calendarRenderTodos();

      // --- 친환경 챌린지 스크립트 ---
      const challengeContainer = document.getElementById("challengeContainer");
      const pointsDisplay = document.getElementById("points");
      const itemsDiv = document.getElementById("items");
      const purchasedList = document.getElementById("purchasedItems");
      const challengeResetBtn = document.getElementById("resetBtn"); // 이름 변경
      const challengePostBtn = document.getElementById("postBtn"); // 이름 변경
      const certifyText = document.getElementById("certifyText");
      const certifyImageInput = document.getElementById("certifyImage");
      const certifyFeed = document.getElementById("certifyFeed");

      const allChallenges = [
        "재활용 분리수거 철저히 하기", "일회용품 사용 줄이기 (비닐봉투, 플라스틱 컵 등)", "대중교통 이용하거나 자전거 타기",
        "플라스틱 빨대 및 식기류 사용하지 않기", "사용하지 않는 전등 및 전자기기 플러그 뽑기", "텀블러 또는 개인컵 사용하기",
        "일주일에 하루 채식 도전하기", "친환경 인증 제품 구매하기 (세제, 화장품 등)", "이면지 사용 및 종이 청구서 대신 전자명세서 받기",
        "하루 30분 동네 공원 또는 자연 속 걷기", "짧은 거리는 걷거나 자전거 이용하기", "물 절약하기 (양치컵 사용, 샤워 시간 줄이기)"
      ];
      const storeItems = [
        { name: "친환경 씨앗 연필 세트", cost: 30 }, { name: "대나무 칫솔 (2개입)", cost: 20 },
        { name: "휴대용 접이식 에코백", cost: 50 }, { name: "천연 주방 세제 리필 (500ml)", cost: 40 },
        { name: "업사이클링 미니 화분", cost: 60 }
      ];
      let challengePoints = 0; // 이름 변경
      let challengePurchased = []; // 이름 변경
      let challengeCurrentChallenges = []; // 이름 변경

      function challengeSaveData() {
        localStorage.setItem('ecoChallengePoints', challengePoints);
        localStorage.setItem('ecoChallengePurchased', JSON.stringify(challengePurchased));
        localStorage.setItem('ecoChallengeCurrentChallenges', JSON.stringify(challengeCurrentChallenges));
      }

      function challengeLoadData() {
        const savedPoints = localStorage.getItem('ecoChallengePoints');
        if (savedPoints !== null) challengePoints = parseInt(savedPoints);
        const savedPurchased = localStorage.getItem('ecoChallengePurchased');
        if (savedPurchased) challengePurchased = JSON.parse(savedPurchased);
        const savedChallenges = localStorage.getItem('ecoChallengeCurrentChallenges');
        if (savedChallenges) challengeCurrentChallenges = JSON.parse(savedChallenges);
        challengeUpdatePointsDisplay();
        challengeUpdatePurchasedItems();
        if (challengeCurrentChallenges.length > 0) challengeRenderChallenges(false);
        else challengeStartNewChallenges();
        challengeLoadCertifyFeed();
      }

      function challengeUpdatePointsDisplay() {
        pointsDisplay.textContent = `포인트: ${challengePoints}`;
      }

      function challengeUpdatePurchasedItems() {
        purchasedList.innerHTML = "";
        challengePurchased.forEach(item => {
          const li = document.createElement("li");
          li.textContent = item;
          purchasedList.appendChild(li);
        });
      }

      function challengeShowStoreItems() {
        itemsDiv.innerHTML = "";
        storeItems.forEach(item => {
          const itemDiv = document.createElement("div");
          itemDiv.className = "item";
          const itemName = document.createElement("span");
          itemName.textContent = `${item.name} (가격: ${item.cost} 포인트)`;
          const buyBtn = document.createElement("button");
          buyBtn.textContent = "구매하기";
          buyBtn.addEventListener("click", () => {
            if (challengePoints >= item.cost) {
              challengePoints -= item.cost;
              challengeUpdatePointsDisplay();
              challengePurchased.push(item.name);
              challengeUpdatePurchasedItems();
              alert(`${item.name}을(를) 구매했습니다!`);
              challengeSaveData();
            } else alert("포인트가 부족합니다!");
          });
          itemDiv.appendChild(itemName);
          itemDiv.appendChild(buyBtn);
          itemsDiv.appendChild(itemDiv);
        });
      }

      function challengeGetRandomChallengeIndices(count, excludeIndices = []) {
        const availableIndices = allChallenges.map((_, i) => i).filter(i => !excludeIndices.includes(i));
        const selectedIndices = [];
        while (selectedIndices.length < count && availableIndices.length > 0) {
          const randomIndex = Math.floor(Math.random() * availableIndices.length);
          selectedIndices.push(availableIndices.splice(randomIndex, 1)[0]);
        }
        return selectedIndices;
      }

      function challengeRenderChallenges(isNewSet = true) {
        challengeContainer.innerHTML = "";
        if (isNewSet) {
          const currentChallengeTexts = challengeCurrentChallenges.map(c => c.text);
          const excludeIndices = allChallenges.map((text, i) => (currentChallengeTexts.includes(text) ? i : -1)).filter(i => i !== -1);
          let newIndices = challengeGetRandomChallengeIndices(3, excludeIndices);
          if (newIndices.length < 3 && allChallenges.length > 3) {
            const numToReplace = 3 - newIndices.length;
            const indicesToKeep = challengeCurrentChallenges.slice(0, challengeCurrentChallenges.length - numToReplace).map(c => c.originalIndex);
            const replacementIndices = challengeGetRandomChallengeIndices(numToReplace, [...excludeIndices, ...indicesToKeep]);
            newIndices.push(...replacementIndices);
          }
          challengeCurrentChallenges = newIndices.map((originalIndex, i) => ({
            text: allChallenges[originalIndex], originalIndex: originalIndex, id: `challenge-${Date.now()}-${i}`
          }));
        }
        if (challengeCurrentChallenges.length === 0) {
          challengeContainer.textContent = "모든 챌린지를 완료했거나, 표시할 챌린지가 없습니다!";
          challengeSaveData(); return;
        }
        challengeCurrentChallenges.forEach(challengeData => {
          const label = document.createElement("label");
          label.className = "challenge"; label.htmlFor = challengeData.id;
          const checkbox = document.createElement("input");
          checkbox.type = "checkbox"; checkbox.id = challengeData.id;
          checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
              challengePoints += 10; challengeUpdatePointsDisplay();
              const challengeIndexInCurrent = challengeCurrentChallenges.findIndex(c => c.id === challengeData.id);
              if (challengeIndexInCurrent !== -1) {
                const excludeIndicesForNew = challengeCurrentChallenges.map(c => c.originalIndex);
                const newSingleIndexArr = challengeGetRandomChallengeIndices(1, excludeIndicesForNew);
                if (newSingleIndexArr.length > 0) {
                  challengeCurrentChallenges[challengeIndexInCurrent] = {
                    text: allChallenges[newSingleIndexArr[0]], originalIndex: newSingleIndexArr[0],
                    id: `challenge-${Date.now()}-${challengeIndexInCurrent}`
                  };
                } else {
                  challengeCurrentChallenges.splice(challengeIndexInCurrent, 1);
                  if (challengeCurrentChallenges.length === 0) alert("모든 챌린지를 완료했습니다!");
                }
              }
              challengeRenderChallenges(false); challengeSaveData();
            }
          });
          label.appendChild(checkbox);
          const span = document.createElement("span");
          span.textContent = challengeData.text;
          label.appendChild(span);
          challengeContainer.appendChild(label);
        });
        challengeSaveData();
      }

      function challengeStartNewChallenges() {
        challengeCurrentChallenges = [];
        challengeRenderChallenges(true);
      }
      challengeResetBtn.addEventListener("click", challengeStartNewChallenges);

      function challengeSaveCertifyFeed() {
        const feedItems = [];
        certifyFeed.querySelectorAll('.feed-card').forEach(card => {
          const text = card.querySelector('p')?.textContent || "";
          const imgSrc = card.querySelector('img')?.src || "";
          feedItems.push({text, imgSrc});
        });
        localStorage.setItem('ecoCertifyFeed', JSON.stringify(feedItems.slice(0, 10)));
      }

      function challengeLoadCertifyFeed() {
        const savedFeed = localStorage.getItem('ecoCertifyFeed');
        if (savedFeed) {
          const feedItems = JSON.parse(savedFeed);
          feedItems.forEach(item => challengeCreateCertifyPost(item.text, item.imgSrc, false));
        }
      }

      function challengeCreateCertifyPost(text, imgSrc, shouldSave = true) {
        const card = document.createElement("div"); card.className = "feed-card";
        if (text) {
          const content = document.createElement("p"); content.textContent = text;
          content.style.cssText = "margin-bottom:10px; font-weight:500;"; card.appendChild(content);
        }
        if (imgSrc) {
          const img = document.createElement("img"); img.src = imgSrc;
          img.style.cssText = `max-width:100%; max-height:300px; object-fit:cover; border-radius:8px; margin-top:${text ? '10px' : '0'};`;
          card.appendChild(img);
        }
        const likeSection = document.createElement("div");
        likeSection.style.cssText = "margin-top:12px; display:flex; align-items:center; gap:8px;";
        const likeBtn = document.createElement("button");
        likeBtn.innerHTML = "❤️ <span class='text'>좋아요</span>";
        likeBtn.style.cssText = "padding:6px 12px; border:1px solid #ddd; border-radius:20px; cursor:pointer; background-color:#f0f0f0; font-weight:600;";
        likeBtn.dataset.liked = "false";
        const likeCount = document.createElement("span");
        likeCount.textContent = "0"; likeCount.style.fontWeight = "500";
        likeBtn.addEventListener("click", () => {
          let count = parseInt(likeCount.textContent);
          if (likeBtn.dataset.liked === "false") {
            likeCount.textContent = count + 1; likeBtn.dataset.liked = "true";
            likeBtn.style.backgroundColor = "#a5d6a7"; likeBtn.style.color = "#1b5e20";
            likeBtn.innerHTML = "💚 <span class='text'>좋아요</span>";
          }
          if(shouldSave) challengeSaveCertifyFeed();
        });
        likeSection.appendChild(likeBtn); likeSection.appendChild(likeCount); card.appendChild(likeSection);

        const commentSection = document.createElement("div");
        commentSection.style.cssText = "margin-top:15px; border-top:1px solid #eee; padding-top:10px;";
        const commentList = document.createElement("div");
        commentList.style.cssText = "display:flex; flex-direction:column; gap:6px; margin-bottom:10px; max-height:100px; overflow-y:auto;";
        const commentInput = document.createElement("input");
        commentInput.type = "text"; commentInput.placeholder = "댓글을 입력하세요...";
        commentInput.style.cssText = "padding:8px 10px; border:1px solid #ccc; border-radius:20px; width:calc(100% - 90px); margin-right:8px;";
        const commentBtn = document.createElement("button");
        commentBtn.textContent = "등록";
        commentBtn.style.cssText = "padding:8px 15px; border:none; border-radius:20px; cursor:pointer; background-color:#c8e6c9; color:#2e7d32; font-weight:600;";
        commentBtn.addEventListener("click", () => {
          const commentText = commentInput.value.trim();
          if (commentText) {
            const comment = document.createElement("div");
            comment.textContent = `💬 ${commentText}`;
            comment.style.cssText = "padding:6px 10px; background-color:#f1f8e9; border-radius:15px; font-size:14px; word-break:break-all;";
            commentList.appendChild(comment); commentInput.value = "";
            commentList.scrollTop = commentList.scrollHeight;
            if(shouldSave) challengeSaveCertifyFeed();
          }
        });
        const commentInputArea = document.createElement("div");
        commentInputArea.style.display = "flex"; commentInputArea.style.alignItems = "center";
        commentInputArea.appendChild(commentInput); commentInputArea.appendChild(commentBtn);
        commentSection.appendChild(commentList); commentSection.appendChild(commentInputArea); card.appendChild(commentSection);
        certifyFeed.prepend(card);
        if(shouldSave) challengeSaveCertifyFeed();
      }

      challengePostBtn.addEventListener("click", () => {
        const text = certifyText.value.trim();
        const imageFile = certifyImageInput.files[0];
        if (!text && !imageFile) { alert("내용 또는 이미지를 입력하세요!"); return; }
        if (imageFile) {
          const reader = new FileReader();
          reader.onload = (e) => challengeCreateCertifyPost(text, e.target.result);
          reader.readAsDataURL(imageFile);
        } else challengeCreateCertifyPost(text, null);
        certifyText.value = ""; certifyImageInput.value = "";
      });

      challengeLoadData();
      challengeShowStoreItems();

      // 초기 섹션 표시
      showCalendarSection(); // 기본으로 캘린더 섹션 표시
    });
  </script>
</body>
</html>