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
    { id: 'reportage', title: 'Репортажная съёмка', icon: 'Camera' },
    { id: 'family', title: 'Семейная съёмка', icon: 'Users' },
    { id: 'individual', title: 'Индивидуальная съёмка', icon: 'User' },
    { id: 'pets', title: 'Съёмка животных', icon: 'Heart' }
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
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">Фотограф</h1>
          <div className="hidden md:flex gap-8">
            <a href="#home" className="hover:text-primary transition-colors">Главная</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#about" className="hover:text-primary transition-colors">Обо мне</a>
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#testimonials" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
        </nav>
      </header>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Сохраню ваши<br />
                <span className="text-primary">особенные моменты</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Профессиональная фотосъёмка с душой. Репортажная, семейная, индивидуальная съёмка и портреты животных.
              </p>
              <Button size="lg" className="mt-4" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Забронировать съёмку
              </Button>
            </div>
            <div className="relative animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/e3929fd9-18b3-47b9-a4fb-beeae082a7dc/files/3eb109ed-a0a0-43c1-97d4-e3297bccf2cf.jpg"
                alt="Фотограф"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card key={category.id} className="hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={category.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Портфолио</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {portfolio.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-xl cursor-pointer aspect-square"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <h3 className="text-white font-semibold text-xl">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-4xl font-bold mb-8">Обо мне</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Я профессиональный фотограф с более чем 5-летним опытом работы. 
            Моя страсть — запечатлеть искренние эмоции и создать для вас воспоминания, 
            которые будут радовать долгие годы. Работаю в репортажном стиле, 
            где главное — естественность и атмосфера момента.
          </p>
          <div className="flex justify-center gap-12 pt-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">500+</div>
              <div className="text-muted-foreground mt-2">Съёмок</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">5+</div>
              <div className="text-muted-foreground mt-2">Лет опыта</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">300+</div>
              <div className="text-muted-foreground mt-2">Довольных клиентов</div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Отзывы</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id}>
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-12">Связаться со мной</h2>
          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Расскажите о желаемой съёмке"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="mt-12 text-center space-y-4">
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Icon name="Mail" size={20} />
              <span>photo@example.com</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Icon name="Phone" size={20} />
              <span>+7 (999) 123-45-67</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Фотограф. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
