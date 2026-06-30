import { Selector } from 'testcafe'

fixture('WSC2026 TestCafe app').page('http://web')

test('loads the page and reacts to a click', async t => {
  await t.expect(Selector('h1').innerText).contains('TestCafe')
  await t.click('#btn').click('#btn')
  await t.expect(Selector('#out').innerText).contains('Clicked 2 times')
})
