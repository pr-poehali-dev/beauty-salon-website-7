import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const navigation = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'about', label: 'О нас', icon: 'Heart' },
    { id: 'services', label: 'Услуги', icon: 'Sparkles' },
    { id: 'masters', label: 'Мастера', icon: 'Users' },
    { id: 'prices', label: 'Цены', icon: 'Tag' },
  ];

  const services = [
    {
      title: 'Маникюр',
      description: 'Классический и аппаратный маникюр, дизайн ногтей',
      price: 'от 1500 ₽',
      duration: '60 мин',
      icon: 'Palette'
    },
    {
      title: 'Педикюр',
      description: 'Медицинский и классический педикюр',
      price: 'от 2000 ₽',
      duration: '90 мин',
      icon: 'Heart'
    },
    {
      title: 'Массаж лица',
      description: 'Расслабляющий и омолаживающий массаж',
      price: 'от 2500 ₽',
      duration: '45 мин',
      icon: 'Smile'
    },
    {
      title: 'Косметология',
      description: 'Профессиональный уход за кожей лица',
      price: 'от 3000 ₽',
      duration: '75 мин',
      icon: 'Sparkles'
    },
    {
      title: 'Брови и ресницы',
      description: 'Коррекция бровей, наращивание ресниц',
      price: 'от 1800 ₽',
      duration: '120 мин',
      icon: 'Eye'
    },
    {
      title: 'Стрижка и укладка',
      description: 'Женские стрижки и профессиональная укладка',
      price: 'от 2200 ₽',
      duration: '90 мин',
      icon: 'Scissors'
    }
  ];

  const masters = [
    {
      name: 'Анна Петрова',
      specialty: 'Мастер маникюра и педикюра',
      experience: '8 лет опыта',
      description: 'Специализируется на сложном дизайне и медицинском педикюре'
    },
    {
      name: 'Мария Соколова',
      specialty: 'Косметолог-эстетист',
      experience: '12 лет опыта',
      description: 'Эксперт по anti-age процедурам и уходу за проблемной кожей'
    },
    {
      name: 'Екатерина Белова',
      specialty: 'Мастер по бровям и ресницам',
      experience: '6 лет опыта',
      description: 'Создает идеальную форму бровей и натуральное наращивание ресниц'
    }
  ];

  const renderHome = () => (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-rose-50 to-pink-100 rounded-3xl overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <img 
          src="/img/94a410e4-4c96-4b22-92e3-ee62d5dc0152.jpg" 
          alt="Салон красоты" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-8">
          <h1 className="text-6xl font-montserrat font-bold mb-6 animate-fade-in">
            Салон красоты
            <span className="block text-rose-300">BELLE</span>
          </h1>
          <p className="text-xl mb-8 opacity-90 animate-fade-in">
            Ваша красота в заботливых руках профессионалов
          </p>
          <Button 
            size="lg" 
            className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 text-lg rounded-full animate-scale-in"
            onClick={() => setActiveSection('services')}
          >
            Записаться на процедуру
          </Button>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-montserrat font-bold text-gray-900 mb-4">
            Наши услуги
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Полный спектр beauty-услуг для вашей красоты и комфорта
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 3).map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm hover:bg-white">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-rose-200 transition-colors">
                  <Icon name={service.icon} className="w-6 h-6 text-rose-600" />
                </div>
                <CardTitle className="text-xl font-montserrat">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-rose-600">{service.price}</span>
                  <Badge variant="secondary" className="bg-gray-100">
                    {service.duration}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => setActiveSection('services')}
            className="border-rose-300 text-rose-600 hover:bg-rose-50"
          >
            Все услуги
            <Icon name="ArrowRight" className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-gray-50 rounded-3xl">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-montserrat font-bold text-gray-900 mb-6">
                О салоне BELLE
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Мы создали пространство, где каждая женщина может почувствовать себя особенной. 
                Наша команда профессионалов использует только премиальные продукты и современные технологии.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Check" className="w-5 h-5 text-rose-600" />
                  <span>Индивидуальный подход к каждому клиенту</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" className="w-5 h-5 text-rose-600" />
                  <span>Только сертифицированные мастера</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" className="w-5 h-5 text-rose-600" />
                  <span>Премиальная косметика и материалы</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/f3994429-8227-48a0-a6b1-650bc62aadfb.jpg" 
                alt="Мастер салона" 
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderAbout = () => (
    <div className="space-y-16 py-8">
      <section className="text-center">
        <h1 className="text-5xl font-montserrat font-bold text-gray-900 mb-6">
          О салоне BELLE
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          Мы верим, что красота — это искусство, а каждая женщина — произведение этого искусства
        </p>
      </section>

      <section className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-montserrat font-bold text-gray-900 mb-6">
            Наша философия
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            В салоне BELLE мы создаем не просто beauty-услуги, а целые истории преображения. 
            Каждая процедура — это путешествие к лучшей версии себя, где профессионализм 
            встречается с заботой, а инновации — с традициями красоты.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center p-6 bg-rose-50 rounded-xl">
              <h3 className="text-2xl font-bold text-rose-600 mb-2">500+</h3>
              <p className="text-gray-600">Довольных клиентов</p>
            </div>
            <div className="text-center p-6 bg-rose-50 rounded-xl">
              <h3 className="text-2xl font-bold text-rose-600 mb-2">3 года</h3>
              <p className="text-gray-600">На рынке красоты</p>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <img 
            src="/img/5d4da7a6-4dc9-46b5-9eed-26b5d53d21fa.jpg" 
            alt="Услуги салона" 
            className="rounded-2xl shadow-lg w-full h-auto"
          />
        </div>
      </section>

      <section className="bg-gray-50 rounded-3xl p-12">
        <h2 className="text-3xl font-montserrat font-bold text-center text-gray-900 mb-12">
          Наши преимущества
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Award" className="w-8 h-8 text-rose-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Качество</h3>
            <p className="text-gray-600">Используем только премиальные материалы и проверенные техники</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Clock" className="w-8 h-8 text-rose-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Пунктуальность</h3>
            <p className="text-gray-600">Ценим ваше время и всегда соблюдаем записи</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Heart" className="w-8 h-8 text-rose-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Забота</h3>
            <p className="text-gray-600">Индивидуальный подход и внимание к каждой детали</p>
          </div>
        </div>
      </section>
    </div>
  );

  const renderServices = () => (
    <div className="space-y-12 py-8">
      <section className="text-center">
        <h1 className="text-5xl font-montserrat font-bold text-gray-900 mb-6">
          Наши услуги
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Полный спектр beauty-услуг для вашей красоты и релаксации
        </p>
      </section>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
            <CardHeader className="pb-4">
              <div className="w-14 h-14 bg-rose-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-rose-200 transition-colors">
                <Icon name={service.icon} className="w-7 h-7 text-rose-600" />
              </div>
              <CardTitle className="text-2xl font-montserrat">{service.title}</CardTitle>
              <CardDescription className="text-gray-600 text-base">
                {service.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-bold text-rose-600">{service.price}</span>
                <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                  {service.duration}
                </Badge>
              </div>
              <Button className="w-full bg-rose-600 hover:bg-rose-700">
                Записаться
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderMasters = () => (
    <div className="space-y-12 py-8">
      <section className="text-center">
        <h1 className="text-5xl font-montserrat font-bold text-gray-900 mb-6">
          Наши мастера
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Команда профессионалов с многолетним опытом и страстью к красоте
        </p>
      </section>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {masters.map((master, index) => (
          <Card key={index} className="group hover:shadow-lg transition-all duration-300 text-center">
            <CardHeader className="pb-6">
              <div className="w-24 h-24 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="User" className="w-12 h-12 text-rose-600" />
              </div>
              <CardTitle className="text-2xl font-montserrat">{master.name}</CardTitle>
              <Badge variant="outline" className="border-rose-300 text-rose-600 mx-auto">
                {master.experience}
              </Badge>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold text-gray-800 mb-3">{master.specialty}</p>
              <p className="text-gray-600">{master.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderPrices = () => (
    <div className="space-y-12 py-8">
      <section className="text-center">
        <h1 className="text-5xl font-montserrat font-bold text-gray-900 mb-6">
          Прайс-лист
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Прозрачные цены на все наши услуги без скрытых доплат
        </p>
      </section>

      <div className="space-y-8">
        {services.map((service, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center">
                    <Icon name={service.icon} className="w-6 h-6 text-rose-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-montserrat font-semibold">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                    <Badge variant="secondary" className="mt-2 bg-gray-100">
                      Длительность: {service.duration}
                    </Badge>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-rose-600">{service.price}</div>
                  <Button className="mt-3 bg-rose-600 hover:bg-rose-700">
                    Записаться
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-rose-50 border-rose-200">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">
            Специальные предложения
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Подпишитесь на наши новости и получайте скидки до 20% на услуги салона
          </p>
          <Button size="lg" className="bg-rose-600 hover:bg-rose-700">
            Получить скидку
          </Button>
        </CardContent>
      </Card>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'about': return renderAbout();
      case 'services': return renderServices();
      case 'masters': return renderMasters();
      case 'prices': return renderPrices();
      default: return renderHome();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-rose-600 rounded-xl flex items-center justify-center">
                <Icon name="Sparkles" className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-montserrat font-bold text-gray-900">BELLE</span>
            </div>
            
            <div className="hidden md:flex space-x-1">
              {navigation.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  onClick={() => setActiveSection(item.id)}
                  className={`px-6 py-2 ${
                    activeSection === item.id 
                      ? 'bg-rose-600 text-white hover:bg-rose-700' 
                      : 'text-gray-700 hover:text-rose-600 hover:bg-rose-50'
                  }`}
                >
                  <Icon name={item.icon} className="w-4 h-4 mr-2" />
                  {item.label}
                </Button>
              ))}
            </div>

            <Button className="bg-rose-600 hover:bg-rose-700 text-white">
              <Icon name="Phone" className="w-4 h-4 mr-2" />
              Записаться
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 mt-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-rose-600 rounded-xl flex items-center justify-center">
                  <Icon name="Sparkles" className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-montserrat font-bold">BELLE</span>
              </div>
              <p className="text-gray-400 mb-6">
                Салон красоты BELLE — ваш путь к совершенству и уверенности в себе.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Icon name="Instagram" className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Icon name="MessageCircle" className="w-5 h-5" />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Контакты</h4>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" className="w-5 h-5" />
                  <span>ул. Красоты, 15, Москва</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" className="w-5 h-5" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" className="w-5 h-5" />
                  <span>Пн-Вс: 9:00 - 21:00</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Популярные услуги</h4>
              <div className="space-y-2 text-gray-400">
                <div>Маникюр и педикюр</div>
                <div>Косметология лица</div>
                <div>Массаж и SPA</div>
                <div>Коррекция бровей</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Салон красоты BELLE. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Index;