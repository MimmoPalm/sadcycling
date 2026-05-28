export default function AnnouncementBanner() {
  return (
    <div className="w-full bg-[#11151C] text-white text-center py-3 px-4">
      <p className="font-black uppercase tracking-widest text-sm">
        UPDATE: We made it to Genova.{' '}
        <a href="#genova" className="underline underline-offset-4 text-[#c21717] hover:text-white transition-colors">
          Read the full report &darr;
        </a>
      </p>
    </div>
  )
}
