import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [cartItems, setCartItems] = useState<number>(0);

  const addToCart = () => {
    setCartItems(prev => prev + 1);
  };

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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-cyan-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="text-2xl">🎈</div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                ШарМаркет
              </h1>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
              <a href="#catalog" className="text-foreground hover:text-primary transition-colors">Каталог</a>
              <a href="#delivery" className="text-foreground hover:text-primary transition-colors">Доставка</a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>

            <Button variant="outline" className="relative">
              <Icon name="ShoppingCart" size={20} />
              {cartItems > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                  {cartItems}
                </Badge>
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Яркие шары для{' '}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  незабываемых
                </span>{' '}
                праздников
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Создайте волшебную атмосферу с нашими качественными воздушными шарами. 
                Доставка по всему городу за 2 часа!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="text-lg px-8 py-4 bg-primary hover:bg-primary/90">
                  Выбрать шары
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить
                </Button>
              </div>
            </div>
            
            <div className="flex-1 relative">
              <div className="relative w-full max-w-lg mx-auto">
                <img 
                  src="/img/1751accb-317a-43fb-9228-03be115dd8fc.jpg" 
                  alt="Воздушные шары" 
                  className="w-full h-auto rounded-3xl shadow-2xl animate-float"
                />
                <div className="absolute -top-4 -right-4 bg-accent rounded-full p-4 animate-bounce-gentle">
                  <Icon name="Sparkles" size={24} className="text-accent-foreground" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-secondary rounded-full p-4 animate-bounce-gentle delay-1000">
                  <Icon name="Heart" size={24} className="text-secondary-foreground" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-primary/20 rounded-full animate-float delay-500"></div>
        <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-secondary/20 rounded-full animate-float delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-accent/20 rounded-full animate-float delay-1500"></div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Наш каталог</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выберите идеальные шары для вашего события
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {balloonCategories.map((item, index) => (
              <Card key={item.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden animate-fade-in" 
                    style={{ animationDelay: `${index * 200}ms` }}>
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4 bg-white/90 text-foreground">
                    {item.category}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                      <CardDescription className="text-base">{item.description}</CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{item.price}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90" 
                    onClick={addToCart}
                  >
                    <Icon name="ShoppingBag" size={18} className="mr-2" />
                    В корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon name="Truck" size={32} className="text-primary-foreground" />
              </div>
              <h4 className="text-xl font-semibold mb-4">Быстрая доставка</h4>
              <p className="text-muted-foreground">Доставляем шары по городу за 2 часа</p>
            </div>
            
            <div className="text-center group">
              <div className="mx-auto w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon name="Award" size={32} className="text-secondary-foreground" />
              </div>
              <h4 className="text-xl font-semibold mb-4">Высокое качество</h4>
              <p className="text-muted-foreground">Только проверенные производители</p>
            </div>
            
            <div className="text-center group">
              <div className="mx-auto w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon name="Gift" size={32} className="text-accent-foreground" />
              </div>
              <h4 className="text-xl font-semibold mb-4">Подарочная упаковка</h4>
              <p className="text-muted-foreground">Красивое оформление в подарок</p>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section id="delivery" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-6">Условия доставки</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Clock" size={16} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Быстрая доставка</h4>
                    <p className="text-muted-foreground">От 1 до 3 часов по городу</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="MapPin" size={16} className="text-secondary-foreground" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Зона доставки</h4>
                    <p className="text-muted-foreground">В пределах МКАД бесплатно от 2000₽</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="CreditCard" size={16} className="text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Способы оплаты</h4>
                    <p className="text-muted-foreground">Наличные, карта, перевод</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-8 text-center">
                <Icon name="Truck" size={64} className="mx-auto mb-6 text-primary animate-bounce-gentle" />
                <h4 className="text-2xl font-bold mb-4">Доставка сегодня!</h4>
                <p className="text-muted-foreground mb-6">
                  Закажите до 18:00 и получите шары в тот же день
                </p>
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Оформить заказ
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Контакты</h3>
            <p className="text-xl text-muted-foreground">Свяжитесь с нами удобным способом</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                  <Icon name="Phone" size={24} className="text-primary-foreground" />
                </div>
                <CardTitle>Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold text-primary mb-2">+7 (495) 123-45-67</p>
                <p className="text-muted-foreground">Ежедневно с 9:00 до 21:00</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">
                  <Icon name="MessageCircle" size={24} className="text-secondary-foreground" />
                </div>
                <CardTitle>WhatsApp</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold text-secondary mb-2">+7 (985) 123-45-67</p>
                <p className="text-muted-foreground">Быстрые ответы в чате</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Icon name="Mail" size={24} className="text-accent-foreground" />
                </div>
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-accent mb-2">info@sharmarket.ru</p>
                <p className="text-muted-foreground">Ответим в течение часа</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="text-2xl">🎈</div>
                <h5 className="text-xl font-bold">ШарМаркет</h5>
              </div>
              <p className="text-gray-400">
                Воздушные шары для любых праздников и событий
              </p>
            </div>
            
            <div>
              <h6 className="font-semibold mb-4">Каталог</h6>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Латексные шары</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Фольгированные</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Букеты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Цифры</a></li>
              </ul>
            </div>
            
            <div>
              <h6 className="font-semibold mb-4">Услуги</h6>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Оформление</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Консультация</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Аренда</a></li>
              </ul>
            </div>
            
            <div>
              <h6 className="font-semibold mb-4">Контакты</h6>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@sharmarket.ru</li>
                <li>Москва, ул. Примерная, 123</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ШарМаркет. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;