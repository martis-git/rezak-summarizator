from functools import partial
from enum import Enum
from typing import List
from core.tokenizer import tokenize_sentences
from core.reducers.gensim_impl import gensim_summary
from core.reducers.pytldr_impl import (
    pytldr_lsa_zsoy_summary,
    pytldr_relevance_summary,
    pytldr_text_rank_summary
)
from core.reducers.summa_impl import summa_summary
from core.reducers.sumy_impl import (
    sumy_lsa_summary,
    sumy_lex_summary,
    sumy_luhn_summary
)


class Summarizers(Enum):
    GENSIM = (gensim_summary,)
    PYTLDR_LSA = (pytldr_lsa_zsoy_summary,)
    PYTLDR_RELEVANCE = (pytldr_relevance_summary,)
    PYTLDR_TEXT_RANK = (pytldr_text_rank_summary,)
    SUMMA = (summa_summary,)
    SUMY_LSA = (sumy_lsa_summary,)
    SUMY_LEX = (sumy_lex_summary,)
    SUMY_LUHN = (sumy_luhn_summary,)

    def __init__(self, func):
        self.func = partial(func)

    def summarize(self, text: str, options: dict) -> List[str]:
        result = self.func(text, options)
        if isinstance(result, str):
            return tokenize_sentences(result)
        else:
            return result

