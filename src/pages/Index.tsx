import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const categories = [
    { id: 'reportage', title: 'Репортажная съёмка', icon: 'Camera', desc: 'События и эмоции' },
    { id: 'family', title: 'Семейная съёмка', icon: 'Users', desc: 'Тёплые моменты' },
    { id: 'individual', title: 'Индивидуальная съёмка', icon: 'User', desc: 'Ваш стиль' },
    { id: 'pets', title: 'Съёмка животных', icon: 'Heart', desc: 'Любимые питомцы' }
  ];

  const portfolio = [
    {
      id: 1,
      image: 'https://cdn.poehali.dev/projects/e3929fd9-18b3-47b9-a4fb-beeae082a7dc/files/1cb53e35-f11c-4138-9b23-8e605b9e9b22.jpg',
      category: 'family',
      title: 'Семейная фотосессия'
    },
    {
      id: 2,
      image: 'https://cdn.poehali.dev/projects/e3929fd9-18b3-47b9-a4fb-beeae082a7dc/files/36816643-3c2a-4532-895c-b36335a5fc21.jpg',
      category: 'pets',
      title: 'Портрет питомца'
    },
    {
      id: 3,
      image: 'https://cdn.poehali.dev/projects/e3929fd9-18b3-47b9-a4fb-beeae082a7dc/files/3eb109ed-a0a0-43c1-97d4-e3297bccf2cf.jpg',
      category: 'individual',
      title: 'Индивидуальная съёмка'
    }
  ];

  const testimonials = [
    { id: 1, name: 'Анна Петрова', text: 'Потрясающий фотограф! Все фотографии получились живыми и естественными.', rating: 5 },
    { id: 2, name: 'Михаил Сидоров', text: 'Профессиональный подход, приятное общение. Результат превзошёл ожидания!', rating: 5 },
    { id: 3, name: 'Елена Иванова', text: 'Спасибо за чудесные семейные фото. Теперь только к вам!', rating: 5 }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Спасибо за заявку!',
      description: 'Я свяжусь с вами в ближайшее время.'
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 pointer-events-none" />
      
      <header className="fixed top-0 w-full glass z-50">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold gradient-text">Фотограф</h1>
          <div className="hidden md:flex gap-8">
            <a href="#home" className="text-foreground/80 hover:text-primary transition-colors">Главная</a>
            <a href="#portfolio" className="text-foreground/80 hover:text-primary transition-colors">Портфолио</a>
            <a href="#services" className="text-foreground/80 hover:text-primary transition-colors">Услуги</a>
            <a href="#pricing" className="text-foreground/80 hover:text-primary transition-colors">Цены</a>
            <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">Обо мне</a>
            <a href="#testimonials" className="text-foreground/80 hover:text-primary transition-colors">Отзывы</a>
            <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">Контакты</a>
          </div>
        </nav>
      </header>

      <section id="home" className="relative pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-block px-4 py-2 glass rounded-full text-sm">
                ✨ 2 года опыта в фотографии
              </div>
              <h2 className="text-6xl md:text-7xl font-bold leading-tight">
                Ловлю<br />
                <span className="gradient-text">моменты</span><br />
                жизни
              </h2>
              <p className="text-xl text-foreground/70">
                Создаю атмосферные кадры, которые рассказывают истории. Репортажная, семейная, индивидуальная съёмка.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Забронировать
                </Button>
                <Button size="lg" variant="outline" onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
                  Портфолио
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent opacity-20 blur-3xl rounded-full"></div>
              <img
                src="https://cdn.poehali.dev/projects/e3929fd9-18b3-47b9-a4fb-beeae082a7dc/files/3eb109ed-a0a0-43c1-97d4-e3297bccf2cf.jpg"
                alt="Фотограф"
                className="relative rounded-3xl shadow-2xl w-full h-[550px] object-cover border border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="relative py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold text-center mb-16">
            Что я <span className="gradient-text">снимаю</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div
                key={category.id}
                className="group glass rounded-2xl p-6 hover:border-primary/50 transition-all cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name={category.icon as any} size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{category.title}</h3>
                    <p className="text-sm text-foreground/60">{category.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="relative py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold text-center mb-16">
            <span className="gradient-text">Портфолио</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {portfolio.map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-square"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 z-20">
                  <h3 className="text-white font-semibold text-xl">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="relative py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Цены</span>
          </h2>
          <p className="text-center text-foreground/60 mb-16 text-lg">Выберите подходящий пакет</p>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                name: 'Базовый',
                price: '5 000',
                duration: '1 час',
                features: ['До 30 фото', 'Цветокоррекция', 'Онлайн-галерея', '7 дней на обработку']
              },
              {
                name: 'Стандарт',
                price: '8 000',
                duration: '2 часа',
                features: ['До 60 фото', 'Ретушь', 'Онлайн-галерея', '5 дней на обработку'],
                popular: true
              },
              {
                name: 'Премиум',
                price: '12 000',
                duration: '3 часа',
                features: ['До 100 фото', 'Ретушь', 'Печатный альбом', '3 дня на обработку']
              },
              {
                name: 'Полный день',
                price: '20 000',
                duration: '8 часов',
                features: ['Все фото', 'Полная ретушь', 'Печатный альбом', 'Экспресс обработка']
              }
            ].map((plan, index) => (
              <div
                key={plan.name}
                className={`glass rounded-2xl p-6 space-y-6 hover:border-primary/50 transition-all relative ${
                  plan.popular ? 'border-primary/50 scale-105' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-accent rounded-full text-sm font-semibold">
                    Популярный
                  </div>
                )}
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <div className="text-foreground/60">{plan.duration}</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                    <span className="text-foreground/60">₽</span>
                  </div>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground/70">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${plan.popular ? 'bg-gradient-to-r from-primary to-accent' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Выбрать
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="relative py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="glass rounded-3xl p-12 text-center space-y-8">
            <h2 className="text-5xl font-bold mb-8">
              Обо <span className="gradient-text">мне</span>
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto">
              Я начинающий фотограф с двухлетним опытом работы. 
              Моя страсть — запечатлеть искренние эмоции и создать для вас воспоминания, 
              которые будут радовать долгие годы. Работаю в репортажном стиле, 
              где главное — естественность и атмосфера момента.
            </p>
            <div className="grid md:grid-cols-3 gap-8 pt-8">
              <div className="space-y-2">
                <div className="text-5xl font-bold gradient-text">150+</div>
                <div className="text-foreground/60">Съёмок</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-bold gradient-text">2</div>
                <div className="text-foreground/60">Года опыта</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-bold gradient-text">120+</div>
                <div className="text-foreground/60">Довольных клиентов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="relative py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold text-center mb-16">
            Что говорят <span className="gradient-text">клиенты</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="glass rounded-2xl p-6 space-y-4 hover:border-primary/50 transition-all"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={18} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-foreground/70 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-primary">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-20 px-6">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-5xl font-bold text-center mb-16">
            Давайте <span className="gradient-text">создадим</span> что-то вместе
          </h2>
          <div className="glass rounded-3xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background/50 border-white/10"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background/50 border-white/10"
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder="Расскажите о желаемой съёмке"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="bg-background/50 border-white/10"
                  required
                />
              </div>
              <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90">
                Отправить заявку
              </Button>
            </form>
          </div>
          <div className="mt-12 flex justify-center gap-8">
            <a href="mailto:photo@example.com" className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors">
              <Icon name="Mail" size={20} />
              <span>photo@example.com</span>
            </a>
            <a href="tel:+79991234567" className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors">
              <Icon name="Phone" size={20} />
              <span>+7 (999) 123-45-67</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="relative py-8 px-6 border-t border-white/10">
        <div className="container mx-auto text-center text-foreground/50">
          <p>© 2024 Фотограф. Создано с любовью к искусству.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;