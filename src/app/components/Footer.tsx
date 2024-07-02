export default function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer className="bg-base-200 text-base-content p-4 text-center">
      <div className="container mx-auto">
        <p>© Minden jog fenntartva {currentYear}.</p>
        <div className="flex justify-center space-x-4 mt-2"></div>
      </div>
    </footer>
  );
}
