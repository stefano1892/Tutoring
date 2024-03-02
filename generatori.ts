const generatedNumbers: number[] = []

for (let i = 0; i < 10; i++) {
    generatedNumbers.push(i)
}

function* generator() {
    for (let i = 0; i < 10; i++) {
        yield i
    }
}

for (let i of generator()) {
    if (i >= 5) {
        break
    }
}

async function* asyncGenerator(pages: number) {
    for (let i = 0; i < pages; i++) {
        const response = await fetch(`https://example.com/page/${i + 1}`).then(data => data.json())
        yield response
    }
}

for await (const page of asyncGenerator(10)) {
    console.log(page)
}