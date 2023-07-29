from transformers import pipeline
nlp = pipeline("sentiment-analysis", model='YuryCHep/lfewfwe')
nlp('''<INPUT TEXT>''')
