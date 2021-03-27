import Navbar from '../components/Navbar/Navbar'
import { useUser } from '@auth0/nextjs-auth0';
import Lecture_cards from '../components/Lecture_cards';


export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div className="bg-gray-1">

        <Navbar />
        Welcome {user.name}! <a href="/api/auth/logout">Logout</a>
        <Lecture_cards />

      </div>
    );
  }

  return <><Navbar /><a href="/api/auth/login">Login</a></>;
}
