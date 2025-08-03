import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [showEditor, setShowEditor] = useState(false);

  const templates = [
    {
      id: 'fashion',
      name: 'Магазин одежды',
      description: 'Стильный шаблон для продажи одежды и аксессуаров',
      image: '/img/6d0201f6-5f24-4ec4-a7ab-5aaad0426782.jpg',
      category: 'Мода',
      price: 'Бесплатно',
      demo: 'https://fashion-demo.ru'
    },
    {
      id: 'electronics',
      name: 'Электроника',
      description: 'Технологичный дизайн для магазина электроники',
      image: '/img/0bab6f63-e9ed-402b-919f-b51e199df22c.jpg',
      category: 'Технологии',
      price: 'От 990₽',
      demo: 'https://electronics-demo.ru'
    },
    {
      id: 'books',
      name: 'Книжный магазин',
      description: 'Уютный дизайн для продажи книг и канцтоваров',
      image: '/img/7b906a41-fad4-40ba-9533-d5653424514e.jpg',
      category: 'Образование',
      price: 'От 1990₽',
      demo: 'https://books-demo.ru'
    },
    {
      id: 'beauty',
      name: 'Косметика',
      description: 'Элегантный шаблон для beauty-индустрии',
      image: '/img/1751accb-317a-43fb-9228-03be115dd8fc.jpg',
      category: 'Красота',
      price: 'От 1490₽',
      demo: 'https://beauty-demo.ru'
    },
    {
      id: 'food',
      name: 'Продукты питания',
      description: 'Аппетитный дизайн для продуктового магазина',
      image: '/img/f2cb6322-e73a-4bf5-82c6-686ceee6a1b1.jpg',
      category: 'Еда',
      price: 'От 790₽',
      demo: 'https://food-demo.ru'
    },
    {
      id: 'auto',
      name: 'Автозапчасти',
      description: 'Профессиональный шаблон для автомобильной тематики',
      image: '/img/24be8bb7-625f-48b8-babc-410eb6982bd2.jpg',
      category: 'Авто',
      price: 'От 1290₽',
      demo: 'https://auto-demo.ru'
    }
  ];

  const features = [
    {
      icon: 'Palette',
      title: 'Визуальный редактор',
      description: 'Создавайте сайт без кода с помощью drag & drop редактора'
    },
    {
      icon: 'ShoppingCart',
      title: 'Готовые магазины',
      description: 'Более 50 шаблонов интернет-магазинов под любую нишу'
    },
    {
      icon: 'CreditCard',
      title: 'Приём платежей',
      description: 'Интеграция с 15+ платёжными системами'
    },
    {
      icon: 'Truck',
      title: 'Доставка',
      description: 'Настройка способов доставки и логистики'
    },
    {
      icon: 'BarChart3',
      title: 'Аналитика',
      description: 'Подробная статистика продаж и конверсий'
    },
    {
      icon: 'Smartphone',
      title: 'Мобильная версия',
      description: 'Адаптивный дизайн для всех устройств'
    }
  ];

  const plans = [
    {
      name: 'Старт',
      price: 'Бесплатно',
      period: '',
      features: [
        'До 100 товаров',
        'Базовые шаблоны',
        'Техподдержка',
        'SSL сертификат'
      ],
      buttonText: 'Начать бесплатно',
      popular: false
    },
    {
      name: 'Бизнес',
      price: '1 990₽',
      period: '/месяц',
      features: [
        'До 10,000 товаров',
        'Все шаблоны',
        'Интеграции',
        'CRM система',
        'Маркетинг инструменты'
      ],
      buttonText: 'Попробовать 14 дней',
      popular: true
    },
    {
      name: 'Профи',
      price: '4 990₽',
      period: '/месяц',
      features: [
        'Безлимитные товары',
        'API доступ',
        'Персональный менеджер',
        'Мультисайт',
        'Белый лейбл'
      ],
      buttonText: 'Связаться с нами',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <Icon name="Zap" size={20} className="text-white" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900">ShopBuilder</h1>
              </div>
              
              <nav className="hidden md:flex items-center space-x-6">
                <a href="#templates" className="text-gray-600 hover:text-purple-600 transition-colors">Шаблоны</a>
                <a href="#features" className="text-gray-600 hover:text-purple-600 transition-colors">Возможности</a>
                <a href="#pricing" className="text-gray-600 hover:text-purple-600 transition-colors">Тарифы</a>
                <a href="#examples" className="text-gray-600 hover:text-purple-600 transition-colors">Примеры</a>
                <a href="#support" className="text-gray-600 hover:text-purple-600 transition-colors">Поддержка</a>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-600">
                Войти
              </Button>
              <Button className="bg-purple-600 hover:bg-purple-700">
                Создать магазин
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Создайте{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                интернет-магазин
              </span>{' '}
              за 5 минут
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Платформа ShopBuilder поможет запустить онлайн-продажи без технических знаний. 
              Выберите шаблон, добавьте товары и начинайте продавать уже сегодня.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button 
                size="lg" 
                className="text-lg px-8 py-4 bg-purple-600 hover:bg-purple-700"
                onClick={() => setShowEditor(true)}
              >
                <Icon name="Palette" size={20} className="mr-2" />
                Открыть редактор
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть демо
              </Button>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-6 mx-auto max-w-4xl">
              <img 
                src="/img/7b906a41-fad4-40ba-9533-d5653424514e.jpg" 
                alt="Интерфейс редактора" 
                className="w-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section id="templates" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Шаблоны интернет-магазинов</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Готовые решения для любой ниши. Все шаблоны адаптивны и оптимизированы для продаж.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-7 max-w-2xl mx-auto mb-12">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="fashion">Мода</TabsTrigger>
              <TabsTrigger value="tech">Техника</TabsTrigger>
              <TabsTrigger value="food">Еда</TabsTrigger>
              <TabsTrigger value="beauty">Красота</TabsTrigger>
              <TabsTrigger value="auto">Авто</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {templates.map((template) => (
                  <Card key={template.id} className="group hover:shadow-2xl transition-all duration-300 overflow-hidden">
                    <div className="relative">
                      <img 
                        src={template.image} 
                        alt={template.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                        <Button 
                          variant="secondary" 
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          onClick={() => window.open(template.demo, '_blank')}
                        >
                          <Icon name="ExternalLink" size={16} className="mr-2" />
                          Демо
                        </Button>
                      </div>
                      <Badge className="absolute top-4 left-4 bg-white/90 text-gray-900">
                        {template.category}
                      </Badge>
                      <Badge className="absolute top-4 right-4 bg-purple-600 text-white">
                        {template.price}
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{template.name}</CardTitle>
                      <CardDescription>{template.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex gap-2">
                        <Button 
                          className="flex-1 bg-purple-600 hover:bg-purple-700"
                          onClick={() => setSelectedTemplate(template.id)}
                        >
                          Выбрать шаблон
                        </Button>
                        <Button variant="outline" size="sm">
                          <Icon name="Heart" size={16} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Всё для успешных продаж</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ShopBuilder включает все инструменты для создания и управления интернет-магазином
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group hover:bg-gray-50 p-6 rounded-xl transition-colors">
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
                  <Icon name={feature.icon as any} size={32} className="text-purple-600" />
                </div>
                <h4 className="text-xl font-semibold mb-4 text-gray-900">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Выберите свой тариф</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Гибкие планы для бизнеса любого размера. Начните бесплатно, растите вместе с нами.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-purple-600 scale-105' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600">
                    Популярный
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-3">
                        <Icon name="Check" size={16} className="text-green-500 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-purple-600 hover:bg-purple-700' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold text-white mb-6">
            Готовы запустить свой интернет-магазин?
          </h3>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к 50,000+ предпринимателей, которые выбрали ShopBuilder
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg px-8 py-4"
              onClick={() => setShowEditor(true)}
            >
              Создать магазин бесплатно
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-purple-600">
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <Icon name="Zap" size={20} className="text-white" />
                </div>
                <h5 className="text-xl font-bold">ShopBuilder</h5>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Платформа для создания интернет-магазинов нового поколения
              </p>
            </div>
            
            <div>
              <h6 className="font-semibold mb-4">Продукт</h6>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Шаблоны</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Редактор</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Интеграции</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h6 className="font-semibold mb-4">Поддержка</h6>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Документация</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Обучение</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Форум</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h6 className="font-semibold mb-4">Компания</h6>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Карьера</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Партнёры</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400">&copy; 2024 ShopBuilder. Все права защищены.</p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Editor Modal */}
      <Dialog open={showEditor} onOpenChange={setShowEditor}>
        <DialogContent className="max-w-6xl h-[90vh] p-0">
          <DialogHeader className="p-6 border-b">
            <DialogTitle>Редактор сайтов</DialogTitle>
            <DialogDescription>
              Создавайте интернет-магазин с помощью визуального редактора
            </DialogDescription>
          </DialogHeader>
          <div className="flex h-full">
            {/* Editor Sidebar */}
            <div className="w-80 border-r bg-gray-50 p-4 overflow-y-auto">
              <Tabs defaultValue="templates">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="templates">Шаблоны</TabsTrigger>
                  <TabsTrigger value="blocks">Блоки</TabsTrigger>
                  <TabsTrigger value="settings">Настройки</TabsTrigger>
                </TabsList>
                
                <TabsContent value="templates" className="space-y-4 mt-4">
                  {templates.slice(0, 3).map((template) => (
                    <Card key={template.id} className="cursor-pointer hover:shadow-md transition-shadow">
                      <img src={template.image} alt={template.name} className="w-full h-24 object-cover rounded-t-lg" />
                      <CardHeader className="p-3">
                        <CardTitle className="text-sm">{template.name}</CardTitle>
                        <Button size="sm" className="w-full mt-2">Применить</Button>
                      </CardHeader>
                    </Card>
                  ))}
                </TabsContent>
                
                <TabsContent value="blocks" className="space-y-2 mt-4">
                  {['Заголовок', 'Текст', 'Изображение', 'Кнопка', 'Галерея', 'Контакты'].map((block) => (
                    <div key={block} className="p-3 border border-dashed border-gray-300 rounded-lg cursor-grab hover:border-purple-400 transition-colors">
                      <div className="flex items-center space-x-2">
                        <Icon name="Plus" size={16} className="text-gray-400" />
                        <span className="text-sm font-medium">{block}</span>
                      </div>
                    </div>
                  ))}
                </TabsContent>
                
                <TabsContent value="settings" className="space-y-4 mt-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Название сайта</label>
                    <input className="w-full p-2 border rounded text-sm" defaultValue="Мой магазин" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Основной цвет</label>
                    <div className="flex space-x-2">
                      {['#8B5CF6', '#3B82F6', '#10B981', '#F59E0B'].map((color) => (
                        <div key={color} className="w-8 h-8 rounded border-2 border-gray-300 cursor-pointer" style={{ backgroundColor: color }}></div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Preview Area */}
            <div className="flex-1 bg-gray-100 p-4 overflow-y-auto">
              <div className="bg-white rounded-lg shadow-lg min-h-full">
                {/* Mock website preview */}
                <div className="p-6 border-b">
                  <div className="flex items-center justify-between mb-4">
                    <h1 className="text-2xl font-bold">Мой магазин</h1>
                    <nav className="flex space-x-4 text-sm">
                      <a href="#" className="hover:text-purple-600">Главная</a>
                      <a href="#" className="hover:text-purple-600">Каталог</a>
                      <a href="#" className="hover:text-purple-600">Контакты</a>
                    </nav>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-4">Добро пожаловать в наш магазин</h2>
                    <p className="text-gray-600 mb-6">Лучшие товары по выгодным ценам</p>
                    <Button className="bg-purple-600 hover:bg-purple-700">Смотреть каталог</Button>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    {[1, 2, 3].map((i) => (
                      <Card key={i}>
                        <div className="h-32 bg-gray-200 rounded-t-lg"></div>
                        <CardHeader>
                          <CardTitle className="text-lg">Товар {i}</CardTitle>
                          <CardDescription>Описание товара {i}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex justify-between items-center">
                            <span className="text-xl font-bold">1 990₽</span>
                            <Button size="sm">В корзину</Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;