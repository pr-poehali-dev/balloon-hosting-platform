import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedTemplate, setSelectedTemplate] = useState('balloon-shop');
  const [previewMode, setPreviewMode] = useState(false);
  const [selectedBlock, setSelectedBlock] = useState<string | null>(null);
  const [cartItems, setCartItems] = useState<number>(0);

  const addToCart = () => {
    setCartItems(prev => prev + 1);
  };

  const templates = [
    {
      id: 'balloon-shop',
      name: 'Магазин шаров',
      description: 'Готовый шаблон для продажи воздушных шаров',
      image: '/img/1751accb-317a-43fb-9228-03be115dd8fc.jpg',
      category: 'Интернет-магазин'
    },
    {
      id: 'party-store',
      name: 'Праздничный магазин',
      description: 'Полный набор для организации праздников',
      image: '/img/f2cb6322-e73a-4bf5-82c6-686ceee6a1b1.jpg',
      category: 'Многопрофильный'
    },
    {
      id: 'birthday-shop',
      name: 'День рождения',
      description: 'Специализация на детских праздниках',
      image: '/img/24be8bb7-625f-48b8-babc-410eb6982bd2.jpg',
      category: 'Детские праздники'
    }
  ];

  const blocks = [
    { id: 'header', name: 'Заголовок', icon: 'Layout', description: 'Шапка сайта с навигацией' },
    { id: 'hero', name: 'Главный блок', icon: 'Star', description: 'Первый экран с призывом' },
    { id: 'catalog', name: 'Каталог', icon: 'Grid3X3', description: 'Сетка товаров' },
    { id: 'features', name: 'Преимущества', icon: 'Award', description: 'Плюсы вашего магазина' },
    { id: 'contacts', name: 'Контакты', icon: 'Phone', description: 'Способы связи' },
    { id: 'footer', name: 'Подвал', icon: 'Minus', description: 'Нижняя часть сайта' }
  ];

  const colorThemes = [
    { name: 'Яркий', colors: ['#FF6B6B', '#45B7D1', '#FFEAA7'] },
    { name: 'Пастель', colors: ['#FFB3BA', '#BAFFC9', '#BAE1FF'] },
    { name: 'Монохром', colors: ['#2D3436', '#636E72', '#DDD'] }
  ];

  const balloonCategories = [
    {
      id: 1,
      title: "Воздушные шары",
      description: "Классические латексные шары всех цветов",
      image: "/img/1751accb-317a-43fb-9228-03be115dd8fc.jpg",
      price: "от 50₽",
      category: "Классические"
    },
    {
      id: 2,
      title: "Сердца",
      description: "Романтические шары в форме сердца",
      image: "/img/f2cb6322-e73a-4bf5-82c6-686ceee6a1b1.jpg",
      price: "от 120₽",
      category: "Романтика"
    },
    {
      id: 3,
      title: "Цифры",
      description: "Фольгированные шары с цифрами",
      image: "/img/24be8bb7-625f-48b8-babc-410eb6982bd2.jpg",
      price: "от 200₽",
      category: "День рождения"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Palette" size={20} className="text-white" />
              </div>
              <h1 className="text-xl font-bold">БилдерШар</h1>
            </div>
            <Separator orientation="vertical" className="h-6" />
            <div className="text-sm text-muted-foreground">
              Магазин воздушных шаров
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm">Редактор</span>
              <Switch checked={previewMode} onCheckedChange={setPreviewMode} />
              <span className="text-sm">Превью</span>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Globe" size={16} className="mr-2" />
              Опубликовать
            </Button>
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-73px)]">
        {/* Left Sidebar - Constructor Panel */}
        {!previewMode && (
          <div className="w-80 bg-white border-r border-gray-200 overflow-y-auto">
            <Tabs defaultValue="blocks" className="w-full">
              <TabsList className="grid w-full grid-cols-3 m-4">
                <TabsTrigger value="blocks">Блоки</TabsTrigger>
                <TabsTrigger value="templates">Шаблоны</TabsTrigger>
                <TabsTrigger value="design">Дизайн</TabsTrigger>
              </TabsList>
              
              <TabsContent value="blocks" className="px-4 pb-4">
                <div className="space-y-3">
                  <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                    Элементы сайта
                  </h3>
                  {blocks.map((block) => (
                    <div
                      key={block.id}
                      className={`p-3 border-2 border-dashed rounded-lg cursor-grab hover:border-primary hover:bg-primary/5 transition-colors ${
                        selectedBlock === block.id ? 'border-primary bg-primary/10' : 'border-gray-300'
                      }`}
                      onClick={() => setSelectedBlock(block.id)}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                          <Icon name={block.icon as any} size={16} className="text-gray-600" />
                        </div>
                        <div>
                          <div className="font-medium text-sm">{block.name}</div>
                          <div className="text-xs text-muted-foreground">{block.description}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="templates" className="px-4 pb-4">
                <div className="space-y-4">
                  <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                    Готовые шаблоны
                  </h3>
                  {templates.map((template) => (
                    <Card 
                      key={template.id} 
                      className={`cursor-pointer transition-all hover:shadow-md ${
                        selectedTemplate === template.id ? 'ring-2 ring-primary' : ''
                      }`}
                      onClick={() => setSelectedTemplate(template.id)}
                    >
                      <div className="relative">
                        <img 
                          src={template.image} 
                          alt={template.name}
                          className="w-full h-32 object-cover rounded-t-lg"
                        />
                        <Badge className="absolute top-2 right-2 bg-white/90 text-foreground text-xs">
                          {template.category}
                        </Badge>
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">{template.name}</CardTitle>
                        <CardDescription className="text-xs">{template.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <Button size="sm" variant="outline" className="w-full text-xs">
                          Применить шаблон
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="design" className="px-4 pb-4">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-3">
                      Цветовые схемы
                    </h3>
                    <div className="space-y-3">
                      {colorThemes.map((theme, index) => (
                        <div key={index} className="p-3 border rounded-lg cursor-pointer hover:border-primary transition-colors">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium text-sm">{theme.name}</span>
                            <div className="flex space-x-1">
                              {theme.colors.map((color, i) => (
                                <div key={i} className="w-4 h-4 rounded-full border border-gray-300" style={{ backgroundColor: color }}></div>
                              ))}
                            </div>
                          </div>
                          <Button size="sm" variant="ghost" className="w-full text-xs">
                            Применить
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-3">
                      Шрифты
                    </h3>
                    <div className="space-y-2">
                      {['Montserrat', 'Open Sans', 'Roboto'].map((font) => (
                        <div key={font} className="p-2 border rounded cursor-pointer hover:border-primary transition-colors">
                          <div className="text-sm font-medium" style={{ fontFamily: font }}>{font}</div>
                          <div className="text-xs text-muted-foreground" style={{ fontFamily: font }}>Пример текста</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        )}

        {/* Main Content Area - Preview */}
        <div className="flex-1 overflow-y-auto bg-gray-100 p-4">
          <div className="max-w-5xl mx-auto">
            {/* Preview Frame */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Simulated Website Content */}
              <div className="relative">
                
                {/* Header Block */}
                <div className={`p-4 bg-white border-b ${selectedBlock === 'header' ? 'ring-2 ring-primary ring-inset' : ''}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="text-2xl">🎈</div>
                      <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        ШарМаркет
                      </h1>
                    </div>
                    <nav className="hidden md:flex items-center space-x-6 text-sm">
                      <a href="#" className="text-foreground hover:text-primary">Главная</a>
                      <a href="#" className="text-foreground hover:text-primary">Каталог</a>
                      <a href="#" className="text-foreground hover:text-primary">Доставка</a>
                      <a href="#" className="text-foreground hover:text-primary">Контакты</a>
                    </nav>
                    <Button size="sm" variant="outline">
                      <Icon name="ShoppingCart" size={16} />
                      {cartItems > 0 && (
                        <Badge className="ml-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                          {cartItems}
                        </Badge>
                      )}
                    </Button>
                  </div>
                </div>

                {/* Hero Block */}
                <div className={`p-8 bg-gradient-to-br from-pink-50 to-cyan-50 ${selectedBlock === 'hero' ? 'ring-2 ring-primary ring-inset' : ''}`}>
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h2 className="text-4xl font-bold mb-4 leading-tight">
                        Яркие шары для{' '}
                        <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                          незабываемых
                        </span>{' '}
                        праздников
                      </h2>
                      <p className="text-lg text-muted-foreground mb-6">
                        Создайте волшебную атмосферу с нашими качественными воздушными шарами
                      </p>
                      <div className="flex gap-3">
                        <Button className="bg-primary hover:bg-primary/90">
                          Выбрать шары
                        </Button>
                        <Button variant="outline">
                          Позвонить
                        </Button>
                      </div>
                    </div>
                    <div>
                      <img 
                        src="/img/1751accb-317a-43fb-9228-03be115dd8fc.jpg" 
                        alt="Шары" 
                        className="w-full rounded-2xl shadow-xl"
                      />
                    </div>
                  </div>
                </div>

                {/* Catalog Block */}
                <div className={`p-8 bg-white ${selectedBlock === 'catalog' ? 'ring-2 ring-primary ring-inset' : ''}`}>
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold mb-4">Наш каталог</h3>
                    <p className="text-lg text-muted-foreground">Выберите идеальные шары для вашего события</p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    {balloonCategories.map((item, index) => (
                      <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                        <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">{item.title}</CardTitle>
                          <div className="text-xl font-bold text-primary">{item.price}</div>
                        </CardHeader>
                        <CardContent>
                          <Button className="w-full bg-primary hover:bg-primary/90" onClick={addToCart}>
                            В корзину
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Features Block */}
                <div className={`p-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 ${selectedBlock === 'features' ? 'ring-2 ring-primary ring-inset' : ''}`}>
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      { icon: 'Truck', title: 'Быстрая доставка', desc: 'За 2 часа по городу' },
                      { icon: 'Award', title: 'Высокое качество', desc: 'Проверенные производители' },
                      { icon: 'Gift', title: 'Подарочная упаковка', desc: 'Красивое оформление' }
                    ].map((feature, index) => (
                      <div key={index} className="text-center">
                        <div className="mx-auto w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                          <Icon name={feature.icon as any} size={24} className="text-white" />
                        </div>
                        <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                        <p className="text-muted-foreground">{feature.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contacts Block */}
                <div className={`p-8 bg-white ${selectedBlock === 'contacts' ? 'ring-2 ring-primary ring-inset' : ''}`}>
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold mb-4">Контакты</h3>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      { icon: 'Phone', title: 'Телефон', value: '+7 (495) 123-45-67' },
                      { icon: 'MessageCircle', title: 'WhatsApp', value: '+7 (985) 123-45-67' },
                      { icon: 'Mail', title: 'Email', value: 'info@sharmarket.ru' }
                    ].map((contact, index) => (
                      <Card key={index} className="text-center">
                        <CardHeader>
                          <div className="mx-auto w-10 h-10 bg-primary rounded-full flex items-center justify-center mb-3">
                            <Icon name={contact.icon as any} size={20} className="text-white" />
                          </div>
                          <CardTitle className="text-lg">{contact.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-lg font-semibold text-primary">{contact.value}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Footer Block */}
                <div className={`p-6 bg-gray-900 text-white ${selectedBlock === 'footer' ? 'ring-2 ring-primary ring-inset' : ''}`}>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <div className="text-xl">🎈</div>
                      <h5 className="text-lg font-bold">ШарМаркет</h5>
                    </div>
                    <p className="text-gray-400 mb-4">Воздушные шары для любых праздников</p>
                    <p className="text-sm text-gray-500">&copy; 2024 ШарМаркет. Все права защищены.</p>
                  </div>
                </div>

                {/* Block Selection Indicators */}
                {!previewMode && selectedBlock && (
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    Редактируется: {blocks.find(b => b.id === selectedBlock)?.name}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Block Settings */}
        {!previewMode && selectedBlock && (
          <div className="w-80 bg-white border-l border-gray-200 p-4 overflow-y-auto">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">Настройки блока</h3>
                <div className="text-sm text-muted-foreground mb-4">
                  {blocks.find(b => b.id === selectedBlock)?.name}
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Заголовок</label>
                  <input 
                    type="text" 
                    className="w-full p-2 border border-gray-300 rounded text-sm"
                    defaultValue="Заголовок блока"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Описание</label>
                  <textarea 
                    className="w-full p-2 border border-gray-300 rounded text-sm h-20 resize-none"
                    defaultValue="Описание блока"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Цвет фона</label>
                  <div className="flex space-x-2">
                    {['#FF6B6B', '#45B7D1', '#FFEAA7', '#DDD'].map((color) => (
                      <div 
                        key={color}
                        className="w-8 h-8 rounded border border-gray-300 cursor-pointer"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Показать блок</span>
                  <Switch defaultChecked />
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <Button variant="outline" className="w-full text-sm">
                  <Icon name="Copy" size={16} className="mr-2" />
                  Дублировать блок
                </Button>
                <Button variant="outline" className="w-full text-sm text-red-600 hover:text-red-700">
                  <Icon name="Trash2" size={16} className="mr-2" />
                  Удалить блок
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;