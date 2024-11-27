function takeARandomNumber(max, min = 0){
  return min !== 0 ? Math.floor(Math.random() * max + (max - min)) : Math.floor(Math.random() * max);
}

function createArrayOfOPhotos(){
  const descriptions = ["Вся красота мира в одной картинке",
    "Моменты, которые запечатлены навсегда",
    "Счастье в каждом кадре",
    "Когда слова не нужны, достаточно фотографии",
    "История, рассказанная через объектив",
    "Остановить время в одном кадре",
    "Фотография — это способ улыбнуться в будущем",
    "Сегодня — самый лучший день",
    "Я не доверяю словам. Я доверяю фотографиям",
    "Фотографии — это свидетельство о том, что мы жили",
    "Момент, когда небо и земля сливаются воедино",
    "В объектив всегда видна правда — это как детектор лжи",
    "Сделано объективом и любовью",
    "Счастье никогда не выходит из моды",
    "Лишь тот, кто странствует, открывает новые пути",
    "Зарядитесь нашим теплом",
    "Жизнь лучше, когда ты смеешься",];
  const photos = [];
  for (let i = 0; i < 25; i++){
    const newPhoto = {
      id : i + 1,
      url: `photos/${i + 1}`,
      description: descriptions[takeARandomNumber(descriptions.length)],
      likes: takeARandomNumber(200, 15),
      comments: createArrayOfComments(),
    };
    photos.push(newPhoto);
  }
  return photos;
}

function createArrayOfComments(){
  const comments = [
    "Всё отлично! ",
    "В целом всё неплохо. Но не всё.",
    "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.",
    "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
    "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
    "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!"
  ];
  const names = ["Елизавета", "Алексей", "Михаил", "Александр", "Владимир", "София"];
  const randomNumberOfComments = takeARandomNumber(30);
  const newComments = [];
  for (let i = 0; i < randomNumberOfComments; i++){
    const newComment = {
      id: i + 1,
      avatar: `img/avatar-${takeARandomNumber(6, 1)}.svg`,
      message: takeARandomNumber(2,1) > 1 ? `${comments[takeARandomNumber(comments.length)]}/n${comments[takeARandomNumber(comments.length)]}` : comments[takeARandomNumber(comments.length)],
      name: names[takeARandomNumber(names.length)],
    };
    newComments.push(newComment);
  }

  return newComments;
}

createArrayOfOPhotos();
