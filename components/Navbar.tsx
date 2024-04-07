// import Link from "next/link";
// import React from "react";
// import Image from "next/image";

// const navIcons = [
//   {
//     src: "/assets/icons/search.svg",
//     alt: "search",
//   },
//   {
//     src: "/assets/icons/black-heart.svg",
//     alt: "heart",
//   },
//   {
//     src: "/assets/icons/user.svg",
//     alt: "user",
//   },
// ];

// function Navbar() {
//   return (
//     <header className="w-full">
//       <nav className="nav">
//         <Link href="/" className="flex items-center gap-1">
//           <Image
//             src="/assets/icons/logo.svg"
//             width={27}
//             height={27}
//             alt="logo"
//           ></Image>

//           <p className="nav-logo">
//             Price
//             <span className="text-primary">Ticker</span>
//           </p>
//         </Link>

//         <div className="flex items-center gap-5">
//           {navIcons.map((icon) => (
//             <Link href={""}>
//             <Image
//               key={icon.alt}
//               src={icon.src}
//               alt={icon.alt}
//               width={27}
//               height={27}
//               className="object-contain"
//             />
//             </Link>
//           ))}
//         </div>
//       </nav>
//     </header>
//   );
// }

// export default Navbar;
"use client";

import Link from "next/link";
import React from "react";

const navIcons = [
  {
    src: "/assets/icons/search.svg",
    alt: "search",
    offsetX: 50,
    offsetY: 400,
  },
  {
    src: "/assets/icons/black-heart.svg",
    alt: "heart",
    offsetX: 50,
    offsetY: 1000,
  },
  // {
  //   src: "/assets/icons/user.svg",
  //   alt: "user",
  //   offsetX: 50,
  //   offsetY: 1000,
  // },
];

function handleIconClick(
  event: React.MouseEvent<HTMLImageElement, MouseEvent>,
  offsetX: number,
  offsetY: number
) {
  event.preventDefault();
  window.scrollBy({ top: offsetY, left: offsetX, behavior: "smooth" });
}

function Navbar() {
  return (
    <header className="w-full">
      <nav className="nav">
        <Link href="/" className="flex items-center gap-1">
          <img src="/assets/icons/logo.svg" width={27} height={27} alt="logo" />

          <p className="nav-logo">
            Price
            <span className="text-primary">Ticker</span>
          </p>
        </Link>

        <div className="flex items-center gap-5">
          {navIcons.map((icon) => (
            <img
              key={icon.alt}
              src={icon.src}
              alt={icon.alt}
              width={27}
              height={27}
              className="object-contain"
              onClick={(event) =>
                handleIconClick(event, icon.offsetX, icon.offsetY)
              }
            />
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
