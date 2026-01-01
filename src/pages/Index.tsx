import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const words = {
  nouns: [
    'космос', 'планета', 'звезда', 'галактика', 'орбита', 'спутник', 'комета', 'метеорит',
    'книга', 'музыка', 'искусство', 'театр', 'кино', 'танец', 'поэзия', 'картина',
    'океан', 'гора', 'лес', 'река', 'облако', 'ветер', 'дождь', 'снег',
    'дружба', 'любовь', 'радость', 'счастье', 'мечта', 'надежда', 'свобода', 'мир',
    'город', 'улица', 'площадь', 'мост', 'парк', 'сад', 'фонтан', 'здание',
    'время', 'момент', 'память', 'история', 'будущее', 'жизнь', 'путь', 'выбор'
  ],
  verbs: [
    'летать', 'мечтать', 'создавать', 'открывать', 'исследовать', 'путешествовать', 'танцевать', 'петь',
    'рисовать', 'писать', 'читать', 'слушать', 'смотреть', 'играть', 'учиться', 'развиваться',
    'думать', 'чувствовать', 'понимать', 'верить', 'надеяться', 'любить', 'дружить', 'помогать',
    'строить', 'расти', 'меняться', 'двигаться', 'искать', 'находить', 'достигать', 'побеждать',
    'улыбаться', 'смеяться', 'радоваться', 'наслаждаться', 'восхищаться', 'вдохновлять', 'творить', 'жить'
  ],
  adjectives: [
    'яркий', 'красивый', 'удивительный', 'волшебный', 'чудесный', 'прекрасный', 'великолепный', 'потрясающий',
    'светлый', 'тёплый', 'нежный', 'мягкий', 'гладкий', 'блестящий', 'сияющий', 'искрящийся',
    'сильный', 'смелый', 'храбрый', 'отважный', 'решительный', 'уверенный', 'гордый', 'свободный',
    'добрый', 'ласковый', 'заботливый', 'внимательный', 'чуткий', 'искренний', 'честный', 'верный',
    'новый', 'свежий', 'молодой', 'живой', 'бодрый', 'энергичный', 'активный', 'динамичный',
    'мудрый', 'умный', 'талантливый', 'креативный', 'оригинальный', 'необычный', 'интересный', 'увлекательный'
  ]
};

type Category = 'nouns' | 'verbs' | 'adjectives';

const categoryLabels: Record<Category, string> = {
  nouns: 'Существительные',
  verbs: 'Глаголы',
  adjectives: 'Прилагательные'
};

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('nouns');
  const [currentWord, setCurrentWord] = useState<string>('');
  const [isAnimating, setIsAnimating] = useState(false);

  const generateWord = () => {
    setIsAnimating(true);
    const categoryWords = words[selectedCategory];
    const randomIndex = Math.floor(Math.random() * categoryWords.length);
    const newWord = categoryWords[randomIndex];
    
    setTimeout(() => {
      setCurrentWord(newWord);
      setIsAnimating(false);
    }, 150);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-purple-50 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl space-y-8 animate-fade-in">
        <div className="text-center space-y-3">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight">
            Генератор слов
          </h1>
          <p className="text-lg text-muted-foreground">
            Выберите категорию и получите случайное слово
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          {(Object.keys(categoryLabels) as Category[]).map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className="px-6 py-6 text-base rounded-2xl transition-all hover:scale-105"
            >
              {categoryLabels[category]}
            </Button>
          ))}
        </div>

        <Card className="p-12 rounded-3xl shadow-lg border-2 min-h-[200px] flex items-center justify-center bg-card/50 backdrop-blur-sm">
          {currentWord ? (
            <div className={`text-center transition-all duration-300 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100 animate-scale-in'}`}>
              <p className="text-5xl md:text-6xl font-bold text-primary">
                {currentWord}
              </p>
            </div>
          ) : (
            <div className="text-center text-muted-foreground">
              <Icon name="Sparkles" size={48} className="mx-auto mb-4 opacity-40" />
              <p className="text-xl">Нажмите кнопку, чтобы сгенерировать слово</p>
            </div>
          )}
        </Card>

        <div className="flex justify-center">
          <Button
            onClick={generateWord}
            size="lg"
            className="px-12 py-8 text-xl rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <Icon name="Shuffle" size={24} className="mr-3" />
            Сгенерировать
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
