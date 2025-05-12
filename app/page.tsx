import FavoriteButton from './FavoriteButton';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
          <h1 className="text-2xl font-bold">Click the heart to like the post</h1>
          <FavoriteButton />
      </main>
    </div>
  );
}
