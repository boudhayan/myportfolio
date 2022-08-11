export const CanadaFlag: React.VFC<{ className?: string }> = function ({ className }) {
	return (
		// <svg className={className} viewBox="0 0 9600 4800" xmlns="http://www.w3.org/2000/svg">
		// 	<title>Flag of Canada</title>
		// 	<path
		// 		className="fill-red-500"
		// 		d="m0 0h2400l99 99h4602l99-99h2400v4800h-2400l-99-99h-4602l-99 99H0z"
		// 	/>
		// 	<path
		// 		d="m2400 0h4800v4800h-4800zm2490 4430-45-863a95 95 0 0 1 111-98l859 151-116-320a65 65 0 0 1 20-73l941-762-212-99a65 65 0 0 1-34-79l186-572-542 115a65 65 0 0 1-73-38l-105-247-423 454a65 65 0 0 1-111-57l204-1052-327 189a65 65 0 0 1-91-27l-332-652-332 652a65 65 0 0 1-91 27l-327-189 204 1052a65 65 0 0 1-111 57l-423-454-105 247a65 65 0 0 1-73 38l-542-115 186 572a65 65 0 0 1-34 79l-212 99 941 762a65 65 0 0 1 20 73l-116 320 859-151a95 95 0 0 1 111 98l-45 863z"
		// 		fill="#fff"
		// 	/>
		// </svg>
	<svg className={className} viewBox="0 0 9600 4800" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="flag-icons-in" viewBox="0 0 640 480">
  	<title>Flag of Canada</title>
  <path fill="#f93" d="M0 0h640v160H0z"/>
  <path fill="#fff" d="M0 160h640v160H0z"/>
  <path fill="#128807" d="M0 320h640v160H0z"/>
  <g transform="matrix(3.2 0 0 3.2 320 240)">
    <circle r="20" fill="#008"/>
    <circle r="17.5" fill="#fff"/>
    <circle r="3.5" fill="#008"/>
    <g id="d">
      <g id="c">
        <g id="b">
          <g id="a" fill="#008">
            <circle r=".9" transform="rotate(7.5 -8.8 133.5)"/>
            <path d="M0 17.5.6 7 0 2l-.6 5L0 17.5z"/>
          </g>
          <use xlink:href="#a" width="100%" height="100%" transform="rotate(15)"/>
        </g>
        <use xlink:href="#b" width="100%" height="100%" transform="rotate(30)"/>
      </g>
      <use xlink:href="#c" width="100%" height="100%" transform="rotate(60)"/>
    </g>
    <use xlink:href="#d" width="100%" height="100%" transform="rotate(120)"/>
    <use xlink:href="#d" width="100%" height="100%" transform="rotate(-120)"/>
  </g>
</svg>
	);
};
