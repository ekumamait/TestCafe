import { Selector } from 'testcafe';

//a test for the http://devexpress.github.io/testcafe/example 

fixture `Getting Started`
    .page `http://devexpress.github.io/testcafe/example`;

test('first test', async t =>{
    await t
            .typeText('#developer-name', 'Eric Ebulu')
            .click('#submit-button')
            .expect(Selector('#article-header').innerText).eql('Thank you, Eric Ebulu!');
})