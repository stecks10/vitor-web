import { Experience } from '@/components/Experience';
import { Footer } from '@/components/Footer';
import Header from '@/components/Header';
import { HomePage } from '@/components/Home';

export default function Home() {
  return (
    <div>
      <Header />
      <HomePage />
      <Experience />
      <Footer />
    </div>
  );
}
