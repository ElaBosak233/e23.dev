import { Typography } from "@/components/ui/typography";
import { cn } from "@/utils";

export function meta() {
  return [{ title: "About - E23.DEV" }];
}

export default function About() {
  return (
    <section
      className={cn([
        "flex-1",
        "mx-auto",
        "w-full",
        "max-w-4xl",
        "px-6",
        "md:px-10",
        "lg:px-12",
        "py-10",
        "md:py-12",
        "xl:py-16",
      ])}
    >
      <Typography>
        <h2>Introduction</h2>
        <img
          src="/ela/avatar.png"
          alt="Ela's avatar"
          draggable="false"
          className={cn(["rounded-full", "float-right", "mx-2"])}
          height={144}
          width={144}
        />
        <p>
          Hi, this is{" "}
          <span className="text-emerald-600 dark:text-emerald-400 italic">
            Ela
          </span>
          , nice to meet you! As you see, I am a{" "}
          <span className="text-pink-500 dark:text-pink-300 italic">
            pegasus
          </span>
          . I have an extraordinary passion in this internet world. Let me
          guess, if you are using a{" "}
          <span className="underline">large screen</span> to browse this page,
          you may be able to see my{" "}
          <span className="text-yellow-500 dark:text-yellow-400 italic">
            cutie mark
          </span>{" "}
          🌙.
        </p>
        <p>
          At present, I am still a undergraduate student, focusing on{" "}
          <span className="text-purple-600 dark:text-purple-400">
            Cyberspace Security
          </span>{" "}
          (but major in Computer Science), and I am also good at{" "}
          <span className="text-blue-500 dark:text-blue-400">Python</span> and{" "}
          <span className="text-green-600 dark:text-green-400">front-end</span>{" "}
          work. Additionally, I enjoy accepting new things, such as{" "}
          <span className="text-rose-500 dark:text-rose-400">Rust</span>.
        </p>
        <h2>About My Name</h2>
        <p>
          <span className="text-emerald-600 dark:text-emerald-400">Ela</span>{" "}
          <code>/ˈɛlə/</code>, this is my English nickname. And my{" "}
          <span className="text-red-600 dark:text-red-500">Chinese</span>{" "}
          nickname is called{" "}
          <span className="text-emerald-600 dark:text-emerald-400">埃拉</span>{" "}
          <code>/āi lā/</code>.
        </p>
        <p>
          Let's talk about the history of my nickname. You may have noticed a
          detail about my avatar. I like{" "}
          <span className="text-emerald-600 dark:text-emerald-400">green</span>{" "}
          very much. I have the same name as one of the operators in{" "}
          <span className="underline">Rainbow Six | Siege</span>, the
          green-haired lady Ela from Poland. That's why my usual ID is{" "}
          <span className="text-emerald-600 dark:text-emerald-400 underline">
            ElaBosak233
          </span>
          .
        </p>
        <h2>About My Basic Info</h2>
        <ul>
          <li>Born in February, 2005.</li>
          <li>
            The worldview belongs to{" "}
            <span className="italic underline">
              My Little Pony: Friendship is Magic.
            </span>
          </li>
          <li>
            <span className="italic">Very</span> poor at mathematics. One of the
            regrets in life is not being able to understand mathematics. (Ela's
            physics is better than math!)
          </li>
        </ul>
        <h2>About My Ponieality</h2>
        <ul>
          <li>Sensitive, causing a bit of nervousness.</li>
          <li>Also eager to be cared for by other ponies.</li>
          <li>Usually very gentle, but sometimes it becomes very irritable.</li>
          <li>Flight speed is not fast, unless it is a critical moment.</li>
          <li>
            Be very frank with friends. It's difficult for me to pretend
            emotions.
          </li>
        </ul>
        <h2>About My Cutie Mark</h2>
        <p>
          The subject of my cutie mark is the moon. The moon 🌙 represents
          guardianship, and star ⭐ means companionship.
        </p>
        <h2>About My Hobbies</h2>
        <ul>
          <li>
            Game software{" "}
            <span className="text-purple-500 dark:text-purple-400 font-semibold">
              IntelliJ IDEA
            </span>
            . Hundreds of hours of gameplay. I've wasted most of my life on this
            game.
          </li>
          <li>
            Game series{" "}
            <span className="text-yellow-500 dark:text-yellow-400 font-semibold">
              The Legend of Zelda
            </span>
            . Maybe I was a great swordsman to save the princess Zelda.
          </li>
          <li>
            Animation{" "}
            <span className="text-pink-400 dark:text-pink-300 font-semibold">
              My Little Pony
            </span>
            . See my avatar and my cutie mark, no more explanation. I love RD&TS
            so much.
          </li>
          <li>
            Game software{" "}
            <span className="text-green-400 dark:text-green-200 font-semibold">
              Minecraft
            </span>
            . I learned Java from it.{" "}
            <span className="line-through">(also Jvav)</span>
          </li>
          <li>
            FPS game softwares{" "}
            <span className="text-orange-400 dark:text-orange-200 font-semibold">
              Valorant
            </span>
            ,{" "}
            <span className="text-sky-500 dark:text-sky-400 font-semibold">
              Overwatch
            </span>
            . I learned English from them. (not serious)
          </li>
          <li>
            Tetris game softwares{" "}
            <span className="text-zinc-500 dark:text-zinc-400 font-semibold">
              Tetris Effect Connected
            </span>
            ,{" "}
            <span className="text-blue-500 dark:text-blue-400 font-semibold">
              Puyo Puyo Tetris 2
            </span>
            ,{" "}
            <span className="text-red-600 dark:text-red-500 font-semibold">
              Tetris 99
            </span>
            . They all make me enjoyable! And my favorite TEC level is
            Metamorphosis.
          </li>
        </ul>
        <h2>Contact Me</h2>
        <ul>
          <li>
            QQ{" "}
            <span className="text-sky-500 dark:text-sky-400">
              MTcwODk0Nzk1Mw==
            </span>{" "}
            (I Hope you know what it means)
          </li>
          <li>
            Email{" "}
            <span className="text-green-400 dark:text-green-200">
              i@e23.dev
            </span>
          </li>
          <li>
            Bilibili{" "}
            <a
              href="https://space.bilibili.com/155510267"
              className="text-pink-400! dark:text-pink-200! hover:underline"
              target="_blank"
              rel="noopener"
            >
              155510267
            </a>
          </li>
        </ul>
      </Typography>
    </section>
  );
}
