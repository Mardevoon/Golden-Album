const artistas = [
    {
        image: './img/artistas/Adele.png',
        title: 'Adele',
        genre: 'Pop',
        text: 'Adele é uma cantora e compositora britânica conhecida por sua voz poderosa e emotiva. Ela alcançou fama mundial com álbuns como "19", "21" e "25", ganhando diversos prêmios Grammy.',
        link: 'https://pt.wikipedia.org/wiki/Adele',
        youtube: 'https://www.youtube.com/watch?v=YQHsXMglC9A'
    },
    {
        image: './img/artistas/Beyonce.png',
        title: 'Beyoncé',
        genre: 'Pop/R&B',
        text: 'Beyoncé é uma cantora, compositora e atriz americana. Começou sua carreira como vocalista do Destiny’s Child e depois seguiu uma carreira solo de sucesso, com álbuns como "Dangerously in Love" e "Lemonade".',
        link: 'https://pt.wikipedia.org/wiki/Beyonc%C3%A9',
        youtube: 'https://www.youtube.com/watch?v=bnVUHWCynig'
    },
    {
        image: './img/artistas/Ed_Sheeran.png',
        title: 'Ed Sheeran',
        genre: 'Pop/Folk',
        text: 'Ed Sheeran é um cantor e compositor britânico conhecido por seus sucessos como "Shape of You" e "Thinking Out Loud". Ele ganhou vários prêmios Grammy e é conhecido por suas letras introspectivas.',
        link: 'https://pt.wikipedia.org/wiki/Ed_Sheeran',
        youtube: 'https://www.youtube.com/watch?v=JGwWNGJdvx8'
    },
    {
        image: './img/artistas/Taylor_Swift.png',
        title: 'Taylor Swift',
        genre: 'Pop/Country',
        text: 'Taylor Swift é uma cantora e compositora americana que começou no country e fez uma transição bem-sucedida para o pop. Seus álbuns como "Fearless" e "1989" foram grandes sucessos.',
        link: 'https://pt.wikipedia.org/wiki/Taylor_Swift',
        youtube: 'https://www.youtube.com/watch?v=e-ORhEE9VVg'
    },
    {
        image: './img/artistas/Bruno_Mars.png',
        title: 'Bruno Mars',
        genre: 'Pop/R&B',
        text: 'Bruno Mars é um cantor, compositor e produtor musical americano. Conhecido por hits como "Uptown Funk" e "Just the Way You Are", Mars combina elementos de pop, R&B e funk em sua música.',
        link: 'https://pt.wikipedia.org/wiki/Bruno_Mars',
        youtube: 'https://www.youtube.com/watch?v=fLexgOxsZu0'
    },
    {
        image: './img/artistas/Lady_Gaga.png',
        title: 'Lady Gaga',
        genre: 'Pop',
        text: 'Lady Gaga é uma cantora, compositora e atriz americana famosa por seus visuais inovadores e sua música pop extravagante. Seus álbuns incluem "The Fame" e "Born This Way".',
        link: 'https://pt.wikipedia.org/wiki/Lady_Gaga',
        youtube: 'https://www.youtube.com/watch?v=qrO4YZeyl0I'
    },
    {
        image: './img/artistas/Justin_Bieber.png',
        title: 'Justin Bieber',
        genre: 'Pop',
        text: 'Justin Bieber é um cantor canadense que ganhou fama na adolescência com sucessos como "Baby" e "Sorry". Ele é conhecido por sua carreira em constante evolução e presença nas paradas musicais.',
        link: 'https://pt.wikipedia.org/wiki/Justin_Bieber',
        youtube: 'https://www.youtube.com/watch?v=fRh_vgS2dFE'
    },
    {
        image: './img/artistas/Rihanna.png',
        title: 'Rihanna',
        genre: 'Pop/R&B',
        text: 'Rihanna é uma cantora e empresária de Barbados, conhecida por hits como "Umbrella" e "Diamonds". Ela é uma das artistas mais vendidas do mundo e também tem uma carreira de sucesso como empreendedora.',
        link: 'https://pt.wikipedia.org/wiki/Rihanna',
        youtube: 'https://www.youtube.com/watch?v=lWA2pjMjpBs'
    },
    {
        image: './img/artistas/Kanye_West.png',
        title: 'Kanye West',
        genre: 'Hip Hop',
        text: 'Kanye West é um rapper, produtor e designer americano. Ele é conhecido por sua influência na música e na moda, com álbuns inovadores como "The College Dropout" e "Yeezus".',
        link: 'https://pt.wikipedia.org/wiki/Kanye_West',
        youtube: 'https://www.youtube.com/watch?v=PsO6ZnUZI0g'
    },
    {
        image: './img/artistas/Drake.png',
        title: 'Drake',
        genre: 'Hip Hop',
        text: 'Drake é um rapper e cantor canadense que se tornou uma das maiores estrelas do hip hop moderno. Seus álbuns como "Views" e "Scorpion" foram enormes sucessos comerciais.',
        link: 'https://pt.wikipedia.org/wiki/Drake_(músico)',
        youtube: 'https://www.youtube.com/watch?v=uxpDa-c-4Mc'
    },
    {
        image: './img/artistas/Ariana_Grande.png',
        title: 'Ariana Grande',
        genre: 'Pop/R&B',
        text: 'Ariana Grande é uma cantora e atriz americana, conhecida por sua potente voz e sucessos como "Problem" e "Thank U, Next". Ela é uma das maiores estrelas pop da atualidade.',
        link: 'https://pt.wikipedia.org/wiki/Ariana_Grande',
        youtube: 'https://www.youtube.com/watch?v=SXiSVQZLje8'
    },
    {
        image: './img/artistas/Shawn_Mendes.png',
        title: 'Shawn Mendes',
        genre: 'Pop/Folk',
        text: 'Shawn Mendes é um cantor e compositor canadense que ganhou notoriedade com músicas como "Stitches" e "In My Blood". Ele é conhecido por seu estilo pop e letras introspectivas.',
        link: 'https://pt.wikipedia.org/wiki/Shawn_Mendes',
        youtube: 'https://www.youtube.com/watch?v=lY2yjAdbvdQ'
    },
    {
        image: './img/artistas/Elton_John.png',
        title: 'Elton John',
        genre: 'Pop/Rock',
        text: 'Elton John é um cantor e compositor britânico famoso por seu trabalho ao longo de décadas. Seus álbuns icônicos incluem "Goodbye Yellow Brick Road" e "Rocket Man".',
        link: 'https://pt.wikipedia.org/wiki/Elton_John',
        youtube: 'https://www.youtube.com/watch?v=NrLkTZrPZA4'
    },
    {
        image: './img/artistas/Michael_Jackson.png',
        title: 'Michael Jackson',
        genre: 'Pop',
        text: 'Michael Jackson, conhecido como o "Rei do Pop", foi um cantor e dançarino americano. Ele é famoso por seu impacto na música e dança com álbuns como "Thriller" e "Bad".',
        link: 'https://pt.wikipedia.org/wiki/Michael_Jackson',
        youtube: 'https://www.youtube.com/watch?v=Zi_XLOBDo_Y'
    },
    {
        image: './img/artistas/Whitney_Houston.png',
        title: 'Whitney Houston',
        genre: 'Pop/R&B',
        text: 'Whitney Houston foi uma cantora e atriz americana conhecida por sua poderosa voz e sucessos como "I Will Always Love You". Ela é uma das artistas mais vendidas de todos os tempos.',
        link: 'https://pt.wikipedia.org/wiki/Whitney_Houston',
        youtube: 'https://www.youtube.com/watch?v=3JWTaaS7LdU'
    },
    {
        image: './img/artistas/George_Michael.png',
        title: 'George Michael',
        genre: 'Pop/Rock',
        text: 'George Michael foi um cantor e compositor britânico, conhecido tanto por sua carreira solo quanto pelo duo Wham!. Seus álbuns incluem "Faith" e "Listen Without Prejudice".',
        link: 'https://pt.wikipedia.org/wiki/George_Michael',
        youtube: 'https://www.youtube.com/watch?v=izGwDsrQ1eQ'
    },
    {
        image: './img/artistas/Frank_Sinatra.png',
        title: 'Frank Sinatra',
        genre: 'Jazz/Pop',
        text: 'Frank Sinatra foi um cantor e ator americano com uma carreira que abrangeu várias décadas. Conhecido por seu estilo vocal distinto e álbuns como "Songs for Swingin’ Lovers!"',
        link: 'https://pt.wikipedia.org/wiki/Frank_Sinatra',
        youtube: 'https://www.youtube.com/watch?v=w019MzRosmk'
    },
    {
        image: './img/artistas/Luis_Fonsi.png',
        title: 'Luis Fonsi',
        genre: 'Pop Latino',
        text: 'Luis Fonsi é um cantor e compositor porto-riquenho, famoso por seu hit mundial "Despacito". Ele é conhecido por sua música pop latina e carreira de sucesso na América Latina.',
        link: 'https://pt.wikipedia.org/wiki/Luis_Fonsi',
        youtube: 'https://www.youtube.com/watch?v=kJQP7kiw5Fk'
    },
    {
        image: './img/artistas/Shakira.png',
        title: 'Shakira',
        genre: 'Pop Latino',
        text: 'Shakira é uma cantora e compositora colombiana famosa por seus ritmos cativantes e sucessos como "Hips Don’t Lie". Ela é uma das artistas latinas mais influentes globalmente.',
        link: 'https://pt.wikipedia.org/wiki/Shakira',
        youtube: 'https://www.youtube.com/watch?v=pRpeEdMmmQ0'
    },
    {
        image: './img/artistas/Celine_Dion.png',
        title: 'Céline Dion',
        genre: 'Pop',
        text: 'Céline Dion é uma cantora canadense conhecida por sua poderosa voz e sucessos como "My Heart Will Go On". Ela é uma das artistas mais bem-sucedidas comercialmente da música pop.',
        link: 'https://pt.wikipedia.org/wiki/C%C3%A9line_Dion',
        youtube: 'https://www.youtube.com/watch?v=NJsa6-y4sDs'
    }
];
