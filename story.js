const story = {
    intro: {
        title: 'This is the intro',
        illustration: 'https://img00.deviantart.net/48f9/i/2017/029/1/a/the_little_red_plane_by_joulester-dax43s4.jpg',
        text: 'Lorem ipsum',
        nav: [
            {
                target: 'pathA',
                text: 'Foo'
            },
            {
                target: 'pathB',
                text: 'Bar'
            },
            {
                target: 'pathC',
                text: 'Baz'
            }
        ]
    },
    pathA: {
        title: 'This is Path A',
        illustration: 'https://orig00.deviantart.net/cc89/f/2016/164/e/0/route_number_two_by_alexandreev-da63fpq.jpg',
        text: 'Something bad happened.',
        nav: [
            {
                target: 'intro',
                text: 'You died. Game over.'
            }
        ]
    },
    pathB: {
        title: 'This is Path B',
        illustration: 'https://orig00.deviantart.net/5b87/f/2016/162/8/8/begin_of_a_great_journey_by_frankatt-da5ud6e.jpg',
        text: 'Something awful happened.',
        nav: [
            {
                target: 'intro',
                text: 'You lose. Start over.'
            }
        ]
    },
    pathC: {
        title: 'This is Path C',
        illustration: 'https://orig00.deviantart.net/b4d7/f/2014/179/6/2/retro_sci_fi_by_stayinwonderland-d7ob1c0.jpg',
        text: 'Something cool happened!',
        nav: [
            {
                target: 'pathD',
                text: 'Blah'
            },
            {
                target: 'pathE',
                text: 'Bleh'
            }
        ]
    },
    pathD: {
        title: 'This is Path D',
        illustration: 'https://img00.deviantart.net/6c57/i/2016/148/b/7/rogue_by_nebluus-da449q3.png',
        text: 'Something terrible happened.',
        nav: [
            {
                target: 'intro',
                text: 'Wah wah. Game over.'
            }
        ]
    },
    pathE: {
        title: 'This is Path E',
        illustration: 'https://orig00.deviantart.net/41a1/f/2016/138/c/9/rusty_starship_by_hideyoshi-da2w821.jpg',
        text: 'This is the end. Hooray!',
        nav: [
            {
                target: 'intro',
                text: 'Start again'
            }
        ]
    }
}
