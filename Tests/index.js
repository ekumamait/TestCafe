import { Selector } from 'testcafe';

//a test for the https://ekumamait.github.io/Profile/UI/ 

fixture `Getting Started`
    .page `https://ekumamait.github.io/Profile/UI/`;

test('Profile-headline', async t =>{
    await t
            .expect(Selector('.profile-headline').innerText).eql('Full-Stack Software Engineer.');
})

test('Profile', async t =>{
    await t
            .typeText('.profile-name', 'Eric Ebulu')
})

test('Profile-image', async t =>{
    await t
            .expect(Selector('.profile-image-wrap').visible).ok();
})