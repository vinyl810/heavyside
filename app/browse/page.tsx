export default function Home() {
  return (
    <div className="flex flex-grow flex-col w-screen justify-start align-center p-4 rounded-t-lg">
      <div className="flex flex-col w-full justify-center p-2 rounded-md border-2 border-neutral-500 bg-neutral-300 text-neutral-800">
        <div className="mb-1">Lorem Ipsum</div>
        <hr className="text-neutral-500 h-0 bg-neutral-600 border-neutral-600" />
        <div className="mt-1 text-sm">Content</div>
      </div>
    </div>
  );
}
