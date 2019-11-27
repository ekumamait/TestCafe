import { Selector } from 'testcafe';

//a test for the https://ekumamait.github.io/Profile/UI/ 
const origin = "https://ekumamait.github.io/Profile/UI/";

fixture `Profile page tests`
    .page `${origin}`;

test('Test page URL', async t =>{
    await t.expect(origin).match(/https:\/\/ekumamait.github.io\/Profile\/UI/);
}) 

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