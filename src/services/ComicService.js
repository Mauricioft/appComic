class ComicService {
  getComic ({ id }) {
    return new Promise(resolve => {
      const comicList = [
        {
          month: '3',
          num: 2432,
          link: '',
          year: '2021',
          news: '',
          safe_title: 'Manage Your Preferences',
          transcript: '',
          alt: 'Manage cookies related to essential site functions, such as keeping Atrus and his sons imprisoned within the page.',
          img: 'https://imgs.xkcd.com/comics/manage_your_preferences.png',
          title: 'Manage Your Preferences',
          day: '3'
        }
      ]
      setTimeout(() => resolve(comicList.find(item => item.num === id)), 1000)
    })
  }
}

export default ComicService
