const endpoint = prefix + url;
export const getCategories = (id, langHeader) => {

    const params = {
        "id": 6,
        "jsonrpc": "2.0",
        "method": "call",
        "params": {
            "limit": 80,
            "offset": 0,
            "domain": [
              [
                "parent_id",
                "=",
                id
              ]
            ]
        }
      }

    return axiosService.post(endpoint, params, langHeader)
}

///

export async function getServerSideProps({ locale }) {
    const langHeader = {
        Language: locale
    }

    const results = await getCategoriesNoParams(langHeader).then(res => {
        return res.status === 200 ? res.data.result : null
    })

    console.log("locale: ",locale);
    //recupero la lingua dal context
    return {
        props: {
            ...(await serverSideTranslations(locale ?? 'en', ['common', 'cookies', 'menu', 'searchBar', 'footer', 'userDropDown', 'breadCrumb', 'messages'])),
            responseCategories: results
        },
    };
}

///

export const getCategoriesNoParams = async (langHeader) => {

    const params = {
        "id": 6,
        "jsonrpc": "2.0",
        "method": "call",
        "params": {
            "limit": 80,
            "offset": 0,
            "domain": []
        }
    }

    await axiosService.post(endpoint, params, langHeader)
}
  

