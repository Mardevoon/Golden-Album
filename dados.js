const artistas = [
    {
        image: './img/artistas/Adele.png',
        title: 'Adele',
        genre: 'Pop',
        text: 'Adele é uma cantora e compositora britânica conhecida por sua voz poderosa e emotiva. Ela alcançou fama mundial com álbuns como "19", "21" e "25", ganhando diversos prêmios Grammy.',
        link: 'https://pt.wikipedia.org/wiki/Adele'
    },
    {
        image: './img/artistas/Beyonce.png',
        title: 'Beyoncé',
        genre: 'Pop/R&B',
        text: 'Beyoncé é uma cantora, compositora e atriz americana. Começou sua carreira como vocalista do Destiny’s Child e depois seguiu uma carreira solo de sucesso, com álbuns como "Dangerously in Love" e "Lemonade".',
        link: 'https://pt.wikipedia.org/wiki/Beyonc%C3%A9'
    },
    {
        image: './img/artistas/Ed_Sheeran.png',
        title: 'Ed Sheeran',
        genre: 'Pop/Folk',
        text: 'Ed Sheeran é um cantor e compositor britânico conhecido por seus sucessos como "Shape of You" e "Thinking Out Loud". Ele ganhou vários prêmios Grammy e é conhecido por suas letras introspectivas.',
        link: 'https://pt.wikipedia.org/wiki/Ed_Sheeran'
    },
    {
        image: './img/artistas/Taylor_Swift.png',
        title: 'Taylor Swift',
        genre: 'Pop/Country',
        text: 'Taylor Swift é uma cantora e compositora americana que começou no country e fez uma transição bem-sucedida para o pop. Seus álbuns como "Fearless" e "1989" foram grandes sucessos.',
        link: 'https://pt.wikipedia.org/wiki/Taylor_Swift'
    },
    {
        image: './img/artistas/Bruno_Mars.png',
        title: 'Bruno Mars',
        genre: 'Pop/R&B',
        text: 'Bruno Mars é um cantor, compositor e produtor musical americano. Conhecido por hits como "Uptown Funk" e "Just the Way You Are", Mars combina elementos de pop, R&B e funk em sua música.',
        link: 'https://pt.wikipedia.org/wiki/Bruno_Mars'
    },
    {
        image: './img/artistas/Lady_Gaga.png',
        title: 'Lady Gaga',
        genre: 'Pop',
        text: 'Lady Gaga é uma cantora, compositora e atriz americana famosa por seus visuais inovadores e sua música pop extravagante. Seus álbuns incluem "The Fame" e "Born This Way".',
        link: 'https://pt.wikipedia.org/wiki/Lady_Gaga'
    },
    {
        image: './img/artistas/Justin_Bieber.png',
        title: 'Justin Bieber',
        genre: 'Pop',
        text: 'Justin Bieber é um cantor canadense que ganhou fama na adolescência com sucessos como "Baby" e "Sorry". Ele é conhecido por sua carreira em constante evolução e presença nas paradas musicais.',
        link: 'https://pt.wikipedia.org/wiki/Justin_Bieber'
    },
    {
        image: './img/artistas/Rihanna.png',
        title: 'Rihanna',
        genre: 'Pop/R&B',
        text: 'Rihanna é uma cantora e empresária de Barbados, conhecida por hits como "Umbrella" e "Diamonds". Ela é uma das artistas mais vendidas do mundo e também tem uma carreira de sucesso como empreendedora.',
        link: 'https://pt.wikipedia.org/wiki/Rihanna'
    },
    {
        image: './img/artistas/Kanye_West.png',
        title: 'Kanye West',
        genre: 'Hip Hop',
        text: 'Kanye West é um rapper, produtor e designer americano. Ele é conhecido por sua influência na música e na moda, com álbuns inovadores como "The College Dropout" e "Yeezus".',
        link: 'https://pt.wikipedia.org/wiki/Kanye_West'
    },
    {
        image: './img/artistas/Drake.png',
        title: 'Drake',
        genre: 'Hip Hop',
        text: 'Drake é um rapper e cantor canadense que se tornou uma das maiores estrelas do hip hop moderno. Seus álbuns como "Views" e "Scorpion" foram enormes sucessos comerciais.',
        link: 'https://pt.wikipedia.org/wiki/Drake_(músico)'
    },
    {
        image: './img/artistas/Ariana_Grande.png',
        title: 'Ariana Grande',
        genre: 'Pop/R&B',
        text: 'Ariana Grande é uma cantora e atriz americana, conhecida por sua potente voz e sucessos como "Problem" e "Thank U, Next". Ela é uma das maiores estrelas pop da atualidade.',
        link: 'https://pt.wikipedia.org/wiki/Ariana_Grande'
    },
    {
        image: './img/artistas/Shawn_Mendes.png',
        title: 'Shawn Mendes',
        genre: 'Pop/Folk',
        text: 'Shawn Mendes é um cantor e compositor canadense que ganhou notoriedade com músicas como "Stitches" e "In My Blood". Ele é conhecido por seu estilo pop e letras introspectivas.',
        link: 'https://pt.wikipedia.org/wiki/Shawn_Mendes'
    },
    {
        image: './img/artistas/Elton_John.png',
        title: 'Elton John',
        genre: 'Pop/Rock',
        text: 'Elton John é um cantor e compositor britânico famoso por seu trabalho ao longo de décadas. Seus álbuns icônicos incluem "Goodbye Yellow Brick Road" e "Rocket Man".',
        link: 'https://pt.wikipedia.org/wiki/Elton_John'
    },
    {
        image: './img/artistas/Michael_Jackson.png',
        title: 'Michael Jackson',
        genre: 'Pop',
        text: 'Michael Jackson, conhecido como o "Rei do Pop", foi um cantor e dançarino americano. Ele é famoso por seu impacto na música e dança com álbuns como "Thriller" e "Bad".',
        link: 'https://pt.wikipedia.org/wiki/Michael_Jackson'
    },
    {
        image: './img/artistas/Whitney_Houston.png',
        title: 'Whitney Houston',
        genre: 'Pop/R&B',
        text: 'Whitney Houston foi uma cantora e atriz americana conhecida por sua poderosa voz e sucessos como "I Will Always Love You". Ela é uma das artistas mais vendidas de todos os tempos.',
        link: 'https://pt.wikipedia.org/wiki/Whitney_Houston'
    },
    {
        image: './img/artistas/George_Michael.png',
        title: 'George Michael',
        genre: 'Pop/Rock',
        text: 'George Michael foi um cantor e compositor britânico, conhecido tanto por sua carreira solo quanto pelo duo Wham!. Seus álbuns incluem "Faith" e "Listen Without Prejudice".',
        link: 'https://pt.wikipedia.org/wiki/George_Michael'
    },
    {
        image: './img/artistas/Frank_Sinatra.png',
        title: 'Frank Sinatra',
        genre: 'Jazz/Pop',
        text: 'Frank Sinatra foi um cantor e ator americano com uma carreira que abrangeu várias décadas. Conhecido por seu estilo vocal distinto e álbuns como "Songs for Swingin’ Lovers!"',
        link: 'https://pt.wikipedia.org/wiki/Frank_Sinatra'
    },
    {
        image: './img/artistas/Luis_Fonsi.png',
        title: 'Luis Fonsi',
        genre: 'Pop Latino',
        text: 'Luis Fonsi é um cantor e compositor porto-riquenho, famoso por seu hit mundial "Despacito". Ele é conhecido por sua música pop latina e carreira de sucesso na América Latina.',
        link: 'https://pt.wikipedia.org/wiki/Luis_Fonsi'
    },
    {
        image: './img/artistas/Shakira.png',
        title: 'Shakira',
        genre: 'Pop Latino',
        text: 'Shakira é uma cantora e compositora colombiana famosa por seus ritmos cativantes e sucessos como "Hips Don’t Lie". Ela é uma das artistas latinas mais influentes globalmente.',
        link: 'https://pt.wikipedia.org/wiki/Shakira'
    },
    {
        image: './img/artistas/Celine_Dion.png',
        title: 'Céline Dion',
        genre: 'Pop',
        text: 'Céline Dion é uma cantora canadense conhecida por sua poderosa voz e sucessos como "My Heart Will Go On". Ela é uma das artistas mais bem-sucedidas comercialmente da música pop.',
        link: 'https://pt.wikipedia.org/wiki/C%C3%A9line_Dion'
    }
];
