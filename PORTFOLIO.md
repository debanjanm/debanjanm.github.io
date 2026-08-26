# Project Ideas — Not Another Hackathon Clone

Candidate personal projects, picked to extend actual professional work (LLM fine-tuning, latency optimization, quantization, banking domain) and IIT Bombay stats background — not generic RAG/churn/sentiment demos.

Each entry: what it is, why it's different, stack, portfolio value.

---

## 1. Quantization Loss Autopsy

Quantize 3-4 open LLMs at INT8/INT4/GPTQ/AWQ. Instead of reporting aggregate perplexity, build a tool that diffs *what specifically breaks* — arithmetic reasoning, long-context recall, refusal behavior, non-English tokens. Ship as a small leaderboard site + writeup.

- **Why unique:** everyone publishes the aggregate score; nobody publishes the failure taxonomy.
- **Stack:** HF Transformers, bitsandbytes/AutoGPTQ/AutoAWQ, lm-eval-harness (extended), static site for results.
- **Portfolio value:** direct, public proof of the "quantization" line in your hero section.

## 2. Latency Budget Profiler for LLM Serving

CLI/dashboard that takes a model + hardware config and breaks down where milliseconds go — tokenizer, KV-cache alloc, attention kernel, sampling, network hop — across vLLM/TGI/llama.cpp.

- **Why unique:** people benchmark throughput; almost nobody publishes a latency *waterfall*.
- **Stack:** PyTorch profiler, vLLM/TGI internals, Plotly/Streamlit for the waterfall view.
- **Portfolio value:** "I built the tool I wish existed at work" — directly sellable in interviews.

## 3. Statistical Stress-Test Harness for LLM Evals *(stats + GenAI)*

Eval framework reporting confidence intervals, power analysis, and variance-across-seeds for LLM benchmark claims. Paste a paper's reported numbers + sample size, it flags whether the claim is statistically supported.

- **Why unique:** most "our model beats GPT-4 on X" claims run n=1, no error bars — this catches that.
- **Stack:** Python, scipy/statsmodels for power analysis + bootstrap CIs, small web form for the "check this claim" mode.
- **Portfolio value:** the one project that visibly uses the MSc Applied Statistics degree, not just the AI tooling.

## 4. Synthetic Banking-Fraud Narrative Generator + Detector Adversarial Pair

Two LLM agents: one generates increasingly subtle synthetic fraud narratives (transaction descriptions, chat logs), the other tries to catch them. Track the arms race across generations.

- **Why unique:** domain-relevant to banking without touching real/sensitive data; shows adversarial ML thinking instead of sklearn-101 churn prediction.
- **Stack:** two LLM agents (can be same base model, different prompts/fine-tunes), a scoring loop, generation-over-generation metrics.
- **Portfolio value:** banking + GenAI + adversarial setup in one, relevant to your actual employer's domain.

## 5. "Explain This Quantized Model's Regression" Debugger

Paste two model outputs (fp16 vs quantized) for the same prompt; the tool localizes *which layer's activation drift* likely caused the divergence, using activation patching.

- **Why unique:** extremely niche, extremely relevant to your actual job, near-zero existing tooling.
- **Stack:** PyTorch hooks for activation capture, activation patching (à la mechanistic interpretability work), small diff-viewer UI.
- **Portfolio value:** the deepest/most technical piece — signals you debug quantization, not just apply it.

## 6. Cost-Per-Correct-Token Calculator

Given a task type, shows $ per *correct* answer (not $ per token) across OpenAI/Anthropic/self-hosted-quantized options, kept continuously updated.

- **Why unique:** a real bookmark-able utility, not a "look what I built" demo.
- **Stack:** static site + small eval set per task type + pricing data, auto-refreshed via CI.
- **Portfolio value:** practical, useful to others — drives organic traffic back to the site.

## 7. Dzongkha / Low-Resource Language Tokenizer Efficiency Study

Extends your actual Omdena Bhutan work. Measure tokenizer fertility (tokens-per-word) for Dzongkha and other low-resource languages across GPT/Gemini/Llama tokenizers; quantify the real cost/latency tax low-resource-language users pay.

- **Why unique:** underexplored, ties directly to shipped work, has a social-good angle.
- **Stack:** tokenizer libraries for each model family, a small corpus per language, a comparison chart.
- **Portfolio value:** continuity with a real Omdena deliverable — not a one-off.

---

## Stats + GenAI Combination Ideas (new)

These specifically pair the statistics background with LLM/GenAI work — the intersection nobody else on a typical ML portfolio has.

## 8. Calibration & Reliability Diagrams for LLM Confidence

LLMs (and RAG pipelines with retrieval-confidence scores) often emit implicit or explicit confidence — this project builds reliability diagrams, Brier scores, and Expected Calibration Error (ECE) across models/prompting strategies (self-consistency, verbalized confidence, logprob-based).

- **Why unique:** calibration is a first-class stats concept almost never applied rigorously to LLM outputs in public portfolios.
- **Stack:** logprobs/sampling from open models, scipy/sklearn calibration tools, reliability-diagram plotting.
- **Portfolio value:** directly demonstrates "I can apply classical statistical rigor to a GenAI system," the exact combination in your bio.

## 9. Survival Analysis of Hallucination Onset

Model "time-to-hallucination" (measured in tokens generated, or turns in a conversation) as a survival analysis problem — Kaplan-Meier curves and Cox proportional hazards across context length, temperature, and model size as covariates.

- **Why unique:** reframes a GenAI failure mode using a stats method (survival analysis) that's standard in biostatistics/actuarial work but never applied here — a genuinely novel framing.
- **Stack:** lifelines (Python survival analysis library), a hallucination-detection labeling step (can use an LLM-judge or existing benchmark), long-generation prompts to get event data.
- **Portfolio value:** the single most differentiated idea on this list — actuarial-style stats method applied to an LLM failure mode. Strong conversation-starter piece.

## 10. Bayesian A/B Testing for Prompt Variants

Instead of picking a "best prompt" by eyeballing outputs, run a proper Bayesian A/B test (Beta-Binomial or hierarchical model) across prompt variants using an LLM-judge or task success metric as the outcome, with posterior probability of "variant B beats A" and expected loss — not a p-value.

- **Why unique:** most prompt-engineering content is vibes-based; this brings actual experimental design and Bayesian inference to prompt selection.
- **Stack:** PyMC or a simple closed-form Beta-Binomial model, an LLM-judge or human-labeled outcome set, a small dashboard showing posterior distributions per variant.
- **Portfolio value:** practical (usable at work for real prompt decisions) and a clean stats+GenAI showcase in one small project — good size for a first submission.

---

## Recommendation

Strongest set for the portfolio, ranked by differentiation + feasibility as a solo project:

1. **#9 Survival Analysis of Hallucination Onset** — most unique framing, directly stats+GenAI
2. **#1 Quantization Loss Autopsy** — direct proof of your day job
3. **#8 Calibration & Reliability Diagrams** — stats+GenAI, smaller scope than #9, good second piece
4. **#5 Activation-Drift Debugger** — deepest technical piece if time allows

Next step: pick 2-3 to replace the fictional project cards in `index.html` (see `PLAN.md` Phase 1).
