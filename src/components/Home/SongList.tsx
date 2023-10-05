function SongList() {
  return (
    <div className="flex flex-col text-white text-left gap-4">
      <h1 className="text-3xl font-bold">Trending Songs</h1>
      <ul className="text-xl list-disc marker:text-red-300">
        <li>Gangnam Style (강남스타일) by PSY</li>
        <li>DECORATOR by livetune</li>
        <li>ЗА ДЕНЬГИ ДА by INSTASAMKA</li>
        <li>Cliffs of Dover by James Gordon</li>
        <li>Never Gonna Give You Up by Rick Astley</li>
        <li>Ella Baila Sola by Eslabon Armado</li>
        <li>It's Not Living (If It's Not With You) by The 1975</li>
        <li>Go Go Go Go Gorakubu by Nanamori-Chu☆Goraku-Bu</li>
        <li>Cinco Patinhos by Xuxa</li>
        <li>Roll The Dice (feat. Stamina MC & Lily Allen) by SHY FX</li>
        <li>Mariana Conta 1 by Sinta O Som</li>
        <li>Dragon Soul (From "Dragon Ball Z Kai") by CyYu</li>
      </ul>
    </div>
  );
}
export default SongList;
