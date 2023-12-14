
    function getJsonI18N() {
        // https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator/language
        
        const LANGUAGES = [
            { regex: /^zh\b/, lang: 'zh' },
            { regex: /^ja\b/, lang: 'ja' },
            { regex: /.*/, lang: 'en'}
        ]

        const lang = LANGUAGES.find(l => l.regex.test(navigator.language)).lang
        
        return $.ajax({
            url: `https://laubcdd.github.io/json/lang/${lang}.json`,
            dataType: 'json',
            method: 'GET',
            async: false,
            success: data => res = data,
            error: () => alert('找不到语言文件: ' + lang)
        }).responseJSON
    }