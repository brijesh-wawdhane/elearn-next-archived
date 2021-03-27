import Navbar from '../components/Navbar/Navbar'
import Lecture_cards from '../components/Lecture_cards';


export default function Home() {
    return (
      <div className="bg-gray-1">

        <Navbar />
        Welcome Name! <a href="/api/auth/logout">Logout</a>
        <Lecture_cards />

      </div>
    );
  }

