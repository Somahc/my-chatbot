export async function getResponse(prompt = '') {
    const API_KEY = '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'
    let exportResponse = '';

    console.log(prompt)
    if (prompt == '') return

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: prompt }],
            max_tokens: 150, // 出力される文章量の最大値（トークン数） max:4096
            temperature: 1, // 単語のランダム性 min:0.1 max:2.0
            top_p: 1, // 単語のランダム性 min:-2.0 max:2.0
            frequency_penalty: 0.0, // 単語の再利用 min:-2.0 max:2.0
            presence_penalty: 0.6 // 単語の再利用 min:-2.0 max:2.0
            //stop: [' Human:', ' AI:'] // 途中で生成を停止する単語
        })
    })
    .then(response => response.json())
    .then(data => {
        exportResponse = data.choices[0].message.content;
    })
    /*
    .then(response => response.json())
    .then(data => {
        const responseMessage = data.choices[0].message.content;
        console.log(responseMessage)
    })
    .catch(() => {
        console.log('エラー発生！')
    })
    */
   return exportResponse;
}