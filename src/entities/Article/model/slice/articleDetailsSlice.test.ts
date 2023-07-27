import {
  ArticleBlockType, ArticleType,
} from '../consts/consts';
import { Article } from '../types/article';
import { fetchArticleById } from '../services/fetchArticleById';
import { articleDetailsReducer } from '../slice/articleDetailsSlice';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';

const article: Article = {
  id: '1',
  title: 'title',
  subtitle: 'subtitle',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFYh53xY9yR8cu_8EJPtI6xf9vj9GCL-sNsw&usqp=CAU',
  views: 122,
  user: {
    id: '1',
    username: 'Name',
  },
  createdAt: '15.06.2023',
  type: [ArticleType.IT],
  blocks: [
    {
      id: '1',
      type: ArticleBlockType.TEXT,
      title: 'Заголовок этого блока',
      paragraphs: [
        'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
        'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
      ],
    },
  ],
};

describe('profileSlice.test', () => {
  test('test article pending', () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: false,
      error: 'error',
    };

    expect(articleDetailsReducer(
      state as ArticleDetailsSchema,
      fetchArticleById.pending,
    )).toEqual({
      isLoading: true,
      error: undefined,
    });
  });

  test('test update article fulfilled', () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: true,
    };

    expect(articleDetailsReducer(
      state as ArticleDetailsSchema,
      fetchArticleById.fulfilled(article, '1', '1'), // todo arguments is wrong I guess
    )).toEqual({
      isLoading: false,
      error: undefined,
      data: article,
    });
  });
});
