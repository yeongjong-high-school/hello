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
    challengeSectionDiv.style.display = 'block'; // 챌린지 섹션은 block (또는 flex, 필요에 따라)
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
  const calendarSelectedDateTitle = document.getElementById('selected-date-title');
  const calendarInput = document.getElementById('input');
  const calendarAddBtn = document.getElementById('add-btn');
  const calendarOutput = document.getElementById('output');

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
      deleteBtn.innerHTML = '×'; // HTML 엔티티 사용
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

  // --- 친환경 챌린지 스크립트 ---
  const challengeContainer = document.getElementById("challengeContainer");
  const pointsDisplay = document.getElementById("points");
  const itemsDiv = document.getElementById("items");
  const purchasedList = document.getElementById("purchasedItems");
  const challengeResetBtn = document.getElementById("resetBtn");
  const challengePostBtn = document.getElementById("postBtn");
  const certifyTextEl = document.getElementById("certifyText"); // 변수명 certifyText와 구분
  const certifyImageInputEl = document.getElementById("certifyImage"); // 변수명 certifyImageInput와 구분
  const certifyFeedEl = document.getElementById("certifyFeed"); // 변수명 certifyFeed와 구분

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
  let challengePoints = 0;
  let challengePurchased = [];
  let challengeCurrentChallenges = [];

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
    if (challengeCurrentChallenges.length > 0) {
        challengeRenderChallenges(false);
    } else {
        challengeStartNewChallenges();
    }
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
      if (newIndices.length < 3 && allChallenges.length > 3) { // 모든 챌린지를 소모하지 않았는데 3개 미만이면 기존 것에서 일부 교체
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
    certifyFeedEl.querySelectorAll('.feed-card').forEach(card => {
      const text = card.querySelector('p')?.textContent || "";
      const imgSrc = card.querySelector('img')?.src || "";
      feedItems.push({text, imgSrc});
    });
    localStorage.setItem('ecoCertifyFeed', JSON.stringify(feedItems.slice(0, 10))); // 최근 10개만 저장
  }

  function challengeLoadCertifyFeed() {
    const savedFeed = localStorage.getItem('ecoCertifyFeed');
    if (savedFeed) {
      const feedItems = JSON.parse(savedFeed);
      // 피드 아이템 역순으로 (최신이 위로 가도록) 추가
      feedItems.reverse().forEach(item => challengeCreateCertifyPost(item.text, item.imgSrc, false));
    }
  }

  function challengeCreateCertifyPost(textVal, imgSrcVal, shouldSave = true) {
    const card = document.createElement("div"); card.className = "feed-card";
    if (textVal) {
      const content = document.createElement("p"); content.textContent = textVal;
      content.style.cssText = "margin-bottom:10px; font-weight:500;"; card.appendChild(content);
    }
    if (imgSrcVal) {
      const img = document.createElement("img"); img.src = imgSrcVal;
      img.style.cssText = `max-width:100%; max-height:300px; object-fit:cover; border-radius:8px; margin-top:${textVal ? '10px' : '0'};`;
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
      // 좋아요 취소 기능은 현재 없음
      if(shouldSave) challengeSaveCertifyFeed();
    });
    likeSection.appendChild(likeBtn); likeSection.appendChild(likeCount); card.appendChild(likeSection);

    const commentSection = document.createElement("div");
    commentSection.style.cssText = "margin-top:15px; border-top:1px solid #eee; padding-top:10px;";
    const commentList = document.createElement("div");
    commentList.style.cssText = "display:flex; flex-direction:column; gap:6px; margin-bottom:10px; max-height:100px; overflow-y:auto;";
    const commentInput = document.createElement("input");
    commentInput.type = "text"; commentInput.placeholder = "댓글을 입력하세요...";
    commentInput.style.cssText = "padding:8px 10px; border:1px solid #ccc; border-radius:20px; width:calc(100% - 90px); margin-right:8px; box-sizing: border-box;";
    const commentBtn = document.createElement("button");
    commentBtn.textContent = "등록";
    commentBtn.style.cssText = "padding:8px 15px; border:none; border-radius:20px; cursor:pointer; background-color:#c8e6c9; color:#2e7d32; font-weight:600;";
    commentBtn.addEventListener("click", () => {
      const commentTextVal = commentInput.value.trim();
      if (commentTextVal) {
        const comment = document.createElement("div");
        comment.textContent = `💬 ${commentTextVal}`;
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
    
    // 새 게시물은 항상 맨 위에 추가
    certifyFeedEl.prepend(card);

    if(shouldSave) challengeSaveCertifyFeed();
  }

  challengePostBtn.addEventListener("click", () => {
    const text = certifyTextEl.value.trim(); // .value 사용
    const imageFile = certifyImageInputEl.files[0]; // .files 사용
    if (!text && !imageFile) { alert("내용 또는 이미지를 입력하세요!"); return; }
    if (imageFile) {
      const reader = new FileReader();
      reader.onload = (e) => challengeCreateCertifyPost(text, e.target.result);
      reader.readAsDataURL(imageFile);
    } else {
      challengeCreateCertifyPost(text, null);
    }
    certifyTextEl.value = ""; // .value 사용
    certifyImageInputEl.value = ""; // .value 사용 (파일 입력 초기화)
  });

  // 초기화 함수 호출
  calendarLoadTodos();
  calendarRenderCalendar();
  calendarRenderTodos();

  challengeLoadData(); // 이 함수 내에서 challengeRenderChallenges, challengeUpdatePointsDisplay 등이 호출됨
  challengeShowStoreItems();

  // 초기 섹션 표시
  showCalendarSection(); // 기본으로 캘린더 섹션 표시
});