# Page copy for the survey site. English and Chinese share one structure.
# Edit text here, then run: python3 build.py  (writes docs/index.html and docs/zh/index.html)

SITE = "https://gloriaameng.github.io/Awesome-Agent-Harness/"
REPO = "https://github.com/Gloriaameng/Awesome-Agent-Harness"
PDF = REPO + "/blob/main/Agent_Harness_for_LLM_Agents__A_Survey__v4.pdf"
PDF_RAW = "https://raw.githubusercontent.com/Gloriaameng/Awesome-Agent-Harness/main/Agent_Harness_for_LLM_Agents__A_Survey__v4.pdf"
DOI = "10.20944/preprints202604.0428.v3"
DOI_URL = "https://doi.org/" + DOI
PREPRINT = "https://www.preprints.org/manuscript/202604.0428/v3"
HF = "https://huggingface.co/datasets/GloriaaaM/LLM-Agent-Harness-Survey"
TITLE = "Agent Harness for Large Language Model Agents: A Survey"
DATE_PUBLISHED = "2026-04-07"
DATE_MODIFIED = "2026-11-06"

# Author order follows the DOI record and BibTeX.
AUTHORS = [
    ("Qianyu", "Meng", "1,3", "*"), ("Yanan", "Wang", "2,3", "*"), ("Liyi", "Chen", "3", "†"),
    ("Yihang", "Li", "3", ""), ("Wei", "Wu", "3,4", ""), ("Wenyuan", "Jiang", "3,4", ""),
    ("Qimeng", "Wang", "3", ""), ("Chengqiang", "Lu", "3", ""), ("Yan", "Gao", "3", ""),
    ("Yi", "Wu", "3", ""), ("Yao", "Hu", "3", ""),
]
AFFILIATIONS = {
    "1": "Minzu University of China", "2": "Dalian University of Technology",
    "3": "Xiaohongshu Inc.", "4": "University of Science and Technology of China",
}

FIG = {  # file stem: (width, height)
    "architecture_p2_clean": (1774, 887), "step_state_p2": (1678, 937), "timeline_p2": (1800, 672),
    "landscape_p2": (1678, 937), "tool_governance_p2": (1678, 937), "multi_agent_topology_p2": (1586, 992),
    "evaluation_attribution_p2": (1678, 937),
}

EVAL_LINKS = {
    "effects": [("Harness-Bench", "https://arxiv.org/abs/2605.27922"), ("Beyond the Model", "https://arxiv.org/abs/2609.32459"), ("LongHarness Bench", "https://arxiv.org/abs/2609.38137"), ("Harness the Memory", "https://arxiv.org/abs/2608.15008"), ("WildClawBench", "https://arxiv.org/abs/2605.10912")],
    "evolution": [("SCLATE", "https://arxiv.org/abs/2609.32391"), ("VeRO", "https://arxiv.org/abs/2602.22480"), ("AgentSWE", "https://arxiv.org/abs/2610.13361")],
    "lifecycle": [("HarnessRisk", "https://arxiv.org/abs/2608.17597"), ("HarnessSecurity-Bench", "https://arxiv.org/abs/2610.07639"), ("Hearsay", "https://arxiv.org/abs/2609.32495"), ("SandboxEscapeBench", "https://arxiv.org/abs/2603.02277"), ("HarnessAudit-Bench", "https://arxiv.org/abs/2605.14271")],
    "longhorizon": [("LoopsBench", "https://arxiv.org/abs/2608.00267"), ("Long-Horizon-Terminal-Bench", "https://arxiv.org/abs/2607.08964"), ("SWE-Chain", "https://arxiv.org/abs/2605.14415"), ("ChainSWE", "https://arxiv.org/abs/2607.02606"), ("Hell or High Water", "https://arxiv.org/abs/2508.11027")],
    "protocol": [("DynamicMCPBench", "https://arxiv.org/abs/2607.20531"), ("MCP-Bench", "https://arxiv.org/abs/2508.20453"), ("MCP-AgentBench", "https://arxiv.org/abs/2509.09734"), ("MCPAgentBench", "https://arxiv.org/abs/2512.24565")],
    "infra": [("AgentCompass", "https://arxiv.org/abs/2607.13705"), ("Harbor", "https://github.com/harbor-framework/harbor"), ("HAL", "https://arxiv.org/abs/2510.11977")],
}
EVO_LINKS = {"skillopt": "https://arxiv.org/abs/2605.23904", "metaharness": "https://arxiv.org/abs/2603.28052", "autoharness": "https://arxiv.org/abs/2603.03329", "evobench": "https://arxiv.org/abs/2609.04280", "taolive": "https://arxiv.org/abs/2608.15763"}

EN = dict(
    lang="en", locale="en_US",
    title=TITLE,
    description="Survey of the agent harness, the runtime around LLM agents. Defines six runtime functions (ETCSLV), compares 34 systems including Claude Code and Codex, and maps harness evaluation.",
    skip="Skip to content", home="Agent Harness Survey",
    nav=[("overview", "Overview"), ("framework", "Framework"), ("systems", "Systems"), ("evaluation", "Evaluation"), ("cite", "Citation")],
    github="GitHub", switch_label="中文", switch_aria="阅读中文版",
    kicker="Survey · Preprint 2026",
    equal="Equal contribution", corresponding="Corresponding author",
    links=[("Paper (PDF)", PDF, True), ("DOI", DOI_URL, False), ("Code & Index", REPO, False), ("Dataset", HF, False), ("BibTeX", "#cite", False)],
    tldr="Agent behavior is a property of the model–harness–environment configuration, not of the model alone. We define the agent harness, decompose it into six runtime functions (ETCSLV), code 34 systems against first-party evidence, and map how harness effects are evaluated.",
    tldr_label="TL;DR",
    hero_alt="Agent harness architecture: the model, harness, and environment exchange inputs, actions, and observations; the harness comprises execution, tools, context, state, lifecycle, and evaluation interface.",
    hero_cap="The model, harness, and environment as a closed loop. The context manager selects model inputs; the execution loop and tool registry turn outputs into actions; the state store connects turns; lifecycle hooks act at execution boundaries; the evaluation interface records events and trajectories.",
    open_full="Open full-size figure",

    overview_h="Overview",
    overview=[
        "Large language model agents act through a runtime that assembles context, calls the model, routes tools, persists state, enforces policy, and records trajectories. We call this runtime the <em>agent harness</em> and argue that it is a consequential and frequently under-reported co-determinant of observed agent behavior. We therefore analyze results at the level of a model–harness–environment configuration, which also specifies permissions, resource budget, and evaluator.",
        "We decompose the harness into six recurrent responsibilities, <span class=\"math\">H = (E, T, C, S, L, V)</span>: execution loop, tool registry, context manager, state store, lifecycle hooks, and evaluation interface. With this framework we code 34 systems against first-party documentation and source code, recording source, version, access date, and confidence for every rating, and examine Claude Code, Codex, DeepSeek Harness, and OpenClaw in depth. We then organize harness evaluation into six areas and distinguish four forms of harness adaptation, from within-run reflection to weight-level co-evolution.",
    ],

    def_h="What Is an Agent Harness?",
    def_text="An agent harness is the runtime software between a language model and its environment. It runs the execution loop, assembles context, exposes and governs tools, persists state, and records the evidence an evaluator needs.",
    example_h="Example: fixing a failing test",
    example="The model proposes an edit. The harness decides which files and instructions the model sees, exposes edit and shell tools, checks approval, runs the test, and returns the output. If the run is interrupted, the harness must restore enough state to resume without repeating completed actions. A failed run can originate in the model's decision, missing context, an unavailable tool, or the recovery policy; the final answer alone does not distinguish them.",
    terms_h="Harness, framework, scaffold, and MCP",
    terms=[
        ("Harness", "The configured runtime that carries an agent through repeated model calls, actions, state transitions, and completion."),
        ("Framework / SDK", "Reusable components for building a runtime. A deployed harness combines them with application-specific policies and services."),
        ("Scaffold", "Prompts and workflow structures that organize model behavior. The term overlaps with harness; the survey makes execution and governance responsibilities explicit."),
        ("MCP", "A protocol connecting clients to tool and resource providers. The harness still decides how those capabilities enter the execution loop and permission policy."),
    ],

    fw_h="ETCSLV: Six Runtime Functions of an Agent Harness",
    fw_intro="ETCSLV names six responsibilities that recur across public harness architectures. It locates where a responsibility is implemented; it is not a maturity score.",
    functions=[
        ("E", "Execution loop", "Orders model calls and actions, enforces stopping conditions, and handles retry, delegation, and recovery."),
        ("T", "Tool registry", "Defines the actions visible to the model, their argument schemas, routing, result handling, and execution contracts."),
        ("C", "Context manager", "Selects and transforms instructions, history, observations, retrieved content, and summaries for each model call."),
        ("S", "State store", "Persists conversations, workspaces, checkpoints, memory, and pending operations across turns and restarts."),
        ("L", "Lifecycle hooks", "Apply permissions, approvals, credentials, sandboxing, and audit before and after execution steps."),
        ("V", "Evaluation interface", "Exposes trajectories, state, outcomes, cost, and configuration metadata to an evaluator."),
    ],
    step_alt="State machine of a tool-using execution path: observing, invoking the model, dispatching a tool, awaiting the result, and committing state, with a retry path on tool error.",
    step_cap="A tool-using execution path: observe, invoke the model, dispatch a tool, await the result, and commit state, with retry on tool error. Lanes map each state to its ETCSLV function.",
    hist_h="Origins",
    hist_text="Contemporary harnesses combine runtime ideas from three lineages: software test harnesses, interactive environments, and LLM agent architectures.",
    hist_alt="Timeline of representative work from software testing, interactive environments, and agent architectures leading to current agent harnesses.",
    hist_cap="Representative contributions by historical phase, tracing how execution control, tool use, and state management became shared concerns.",

    sys_h="34 Agent Harness Systems Compared",
    sys_intro="We code 34 systems against the six ETCSLV functions using first-party documentation and source code. Each rating records its source, version or commit, access date, and confidence. Snapshot: 12 October 2026.",
    land_alt="Five groups of runtime systems and four adjacent analysis units.",
    land_cap="Five groups of runtime systems form the 34-system comparison. Capability modules, protocol and sandbox infrastructure, evaluation infrastructure, and task environments are analyzed as separate units.",
    findings_h="Findings",
    findings=[
        ("34 / 34", "E", "All 34 systems document an execution loop; this follows from the inclusion criteria."),
        ("14 · 18 · 2", "V", "The evaluation interface differentiates systems most: rated Full in 14, Partial in 18, and Unverified in 2."),
        ("3 ≠ 1", "S · V", "A transcript, a resumable session, and a reusable evaluation interface serve different purposes and are rated separately."),
    ],
    cases_h="Four anchor cases",
    cases=[
        ("Claude Code", "Product", "Integrates repository exploration, editing, command execution, and delegated subagents into one coding workflow. The case shows how context selection and action approval shape the path from a goal to a tested change."),
        ("Codex", "Runtime", "Connects model and tool events through an execution loop with persisted rollouts, approval, and sandbox controls. The case centers on recoverable state across client surfaces."),
        ("DeepSeek Harness", "Plugin", "Exposes runtime components through plugins, profiles, and patches. The case concerns component boundaries and controlled runtime modification."),
        ("OpenClaw", "Gateway", "Coordinates messaging channels, persistent sessions, and scheduled work through a gateway. The case extends the analysis to identity, state, and authority that persist across interactions."),
    ],
    cases_sum="The four systems place the same function in different layers: product, runtime, plugin, or gateway. A system name therefore does not identify the configuration that produced a result.",
    matrix_h="Evidence matrix",
    search_label="Find a system", search_ph="Search by name", group_label="Group", all_groups="All groups",
    rating_label="Contains rating", any_rating="Any rating",
    categories={"anchor": "Anchor systems", "coding": "Coding harnesses", "runtime": "General runtimes", "persistent": "Persistent, meta, and operational", "workplace": "Workplace and personal agents"},
    ratings={"Full": "Full", "Partial": "Partial", "Absent": "Absent", "Unverified": "Unverified"},
    legend={"Full": "built in and documented", "Partial": "limited, optional, or delegated", "Absent": "explicitly not provided", "Unverified": "insufficient public evidence"},
    legend_note="Ratings reflect documented coverage, not quality or adoption.",
    expand="Expand all groups", collapse="Collapse all groups",
    th_system="System", th_evidence="Evidence",
    comp_names={"E": "Execution", "T": "Tools", "C": "Context", "S": "State", "L": "Lifecycle", "V": "Evaluation interface"},
    show_ev="Sources", hide_ev="Hide sources", source="Source", version="Version", accessed="accessed",
    confidence={"high": "high confidence", "medium": "medium confidence", "low": "low confidence"},
    evidence_types={"first-party source/docs": "first-party source and docs", "first-party architecture documentation": "first-party architecture docs", "first-party product documentation": "first-party product docs"},
    matrix_region="Scrollable system evidence matrix",
    cov_summary="Full component-coverage figure",
    cov_alt="Component coverage of execution, tools, context, state, lifecycle, and evaluation interface across 34 systems.",
    cov_cap="Rows are systems; columns are ETCSLV functions. F, P, A, and ? denote Full, Partial, Absent, and Unverified.",
    download="Download the matrix data (JSON)",

    eng_h="Tool Governance and Multi-Agent Coordination",
    tool_h="Tool governance", tool_alt="Tool governance stages from registration to recovery.",
    tool_cap="Tool governance from registration through selection, dispatch, execution, result handling, and recovery. Interface contracts, authorization, isolation, and result checks sit at the stage where each applies.",
    coord_h="Coordination patterns", coord_alt="Multi-agent coordination patterns compared by runtime responsibility.",
    coord_cap="Coordination patterns compared by where identity, authority, shared state, and records reside.",

    eval_h="How Agent Harnesses Are Evaluated",
    eval_intro="We organize the evaluation literature into six areas. They combine benchmarks, methods, and platforms, and each answers a different question.",
    attr_alt="Three sources of evaluation attribution error and their controls.",
    attr_cap="Three sources of attribution error in agent evaluation (environment change, task ambiguity, and harness configuration) and the controls that address each.",
    q_h="Three evaluation questions",
    questions=[
        ("Configuration comparison", "Which complete configuration performs better under declared conditions?"),
        ("Component study", "What changes when one mechanism is altered and the rest is held fixed?"),
        ("Trajectory audit", "Do permissions, state transitions, tool results, and completion claims match what happened in the environment?"),
    ],
    report="Reporting a harness result requires the model and runtime versions, task environment, tool and approval settings, budget, and execution record, together with cost, recovery behavior, and policy compliance.",
    areas_h="Six evaluation areas",
    areas=[
        ("effects", "Harness effects", "Compare runtime configurations or isolate components with the model and task held fixed."),
        ("evolution", "Harness evolution and continual evaluation", "Measure adaptation and retention as tools, skills, sessions, or runtime components change. Five further works are compared in the table below."),
        ("lifecycle", "Lifecycle, security, and audit", "Probe permissions, attack effects, recovery, and whether records support independent review."),
        ("longhorizon", "Long-horizon loops and recovery", "Test sustained progress, accumulated obligations, and recovery from partial failure."),
        ("protocol", "Protocol and tool substrate", "Separate protocol conformance, tool selection, execution, and verified effects."),
        ("infra", "Evaluation infrastructure", "Provide repeatable runs, interchangeable agents and environments, traces, and graders."),
    ],
    task_env="Task environments such as OSWorld, WebArena, GAIA, and SWE-bench measure configured-system performance. Isolating a harness effect requires additional controls.",
    evo_h="Harness evolution: what changes",
    evo_th=("Work", "Object of change", "Question"),
    evo_rows=[
        ("SkillOpt", "skillopt", "Reusable skill text", "How can rollout feedback guide persistent skill edits?"),
        ("Meta-Harness", "metaharness", "Executable harness code", "How can traces and task scores guide search over runtime implementations?"),
        ("AutoHarness", "autoharness", "Task-specific harness and policy code", "How can environment feedback guide action-validating code?"),
        ("EvoHarnessBench", "evobench", "Tools, skills, and agent configurations", "How are adaptation and retention measured across stages?"),
        ("TaoLive", "taolive", "Model weights and runtime components", "How does model training interact with a changing harness?"),
    ],

    agenda_h="Open Problems",
    agenda=[
        ("Configuration effects", "Measure interactions among model, harness, environment, and policy under matched conditions."),
        ("State continuity", "Test what survives compaction, restart, conflict, revocation, and deletion."),
        ("Independent evaluation", "Link trajectories to environment outcomes and to records outside the agent's control."),
        ("Bounded evolution", "Evaluate versioned harness changes on held-out, out-of-distribution, regression, and safety tasks."),
    ],

    cite_h="Citation",
    cite_note="Please cite the archived preprint.",
    copy="Copy", copied="Copied.", copy_fail="Copy failed; select the text manually.",

    footer="Official project page of the survey. Code, data, and the living evidence index:",
    count_tpl="{n} / {total} systems",
)

ZH = dict(
    lang="zh-CN", locale="zh_CN",
    title=TITLE,  # 与 README_zh 一致：论文标题保留英文原名，不作翻译
    page_title=TITLE + " | 中文项目主页",
    description="《Agent Harness for Large Language Model Agents: A Survey》中文项目主页。本综述界定大语言模型智能体的 harness 层，提出 ETCSLV 六类运行时功能框架，依据第一方证据比较 Claude Code、Codex 等 34 个系统，并梳理 harness 评测研究。",
    skip="跳至正文", home="Agent Harness 综述",
    nav=[("overview", "概述"), ("framework", "框架"), ("systems", "系统"), ("evaluation", "评测"), ("cite", "引用")],
    github="GitHub", switch_label="English", switch_aria="Read the English version",
    kicker="综述 · 预印本 · 2026",
    equal="同等贡献", corresponding="通讯作者",
    links=[("论文 PDF", PDF, True), ("DOI", DOI_URL, False), ("代码与资源索引", REPO, False), ("数据集", HF, False), ("BibTeX", "#cite", False)],
    tldr="智能体行为是模型—harness—环境这一完整配置的属性，而非模型单独的属性。本文界定 agent harness，将其分解为六类运行时功能（ETCSLV），依据第一方证据对 34 个系统进行编码比较，并梳理 harness 效应的评测方法。",
    tldr_label="要点",
    hero_alt="Agent harness 架构图：模型、harness 与环境之间传递输入、动作与观察；harness 由执行循环、工具注册表、上下文管理器、状态存储、生命周期钩子与评测接口构成。",
    hero_cap="模型、harness 与环境构成闭环。上下文管理器确定模型输入；执行循环与工具注册表将模型输出转化为动作；状态存储衔接各轮交互；生命周期钩子作用于执行边界；评测接口记录事件与轨迹。",
    open_full="查看原图",

    overview_h="概述",
    overview=[
        "大语言模型智能体并不直接作用于环境，而是经由一层运行时完成上下文组装、模型调用、工具路由、状态持久化、策略执行与轨迹记录。本文将这一运行时称为 <em>agent harness</em>，并论证它是智能体可观测行为的重要共同决定因素，却常在研究报告中缺乏充分说明。因此，本文以模型—harness—环境配置为分析单元；该配置同时规定权限、资源预算与评测器。",
        "本文将 harness 分解为六类反复出现的职责，即 <span class=\"math\">H = (E, T, C, S, L, V)</span>：执行循环、工具注册表、上下文管理器、状态存储、生命周期钩子与评测接口。基于这一框架，本文依据第一方文档与源代码对 34 个系统进行编码，每项评分均记录来源、版本、访问日期与置信度，并对 Claude Code、Codex、DeepSeek Harness 与 OpenClaw 展开深入分析。在此基础上，本文将 harness 评测研究归纳为六个方向，并区分四种 harness 适应形式：从单次运行内的反思，到与模型权重的协同演化。",
    ],

    def_h="什么是 Agent Harness？",
    def_text="Agent harness 是位于语言模型与环境之间的运行时软件，负责驱动执行循环、组装上下文、提供并管控工具、持久化状态，并记录评测所需的证据。",
    example_h="示例：修复一个未通过的测试",
    example="模型提出代码修改；harness 决定模型可见的文件与指令，提供编辑与命令行工具，核查授权，运行测试并返回结果。若运行中断，harness 须恢复足够的状态，才能在不重复已完成动作的前提下继续执行。一次失败可能源于模型决策、上下文缺失、工具不可用或恢复策略，仅凭最终输出无法加以区分。",
    terms_h="Harness 与框架、脚手架和 MCP 的区别",
    terms=[
        ("Harness", "经过配置的运行时，承载智能体从多轮模型调用、动作执行到状态转移直至任务终止的全过程。"),
        ("框架 / SDK", "用于构建运行时的可复用组件。实际部署的 harness 通常将其与应用层的策略和服务组合使用。"),
        ("脚手架（scaffold）", "组织模型行为的提示词与工作流结构。该术语与 harness 存在交叠；本文进一步明确了其中的执行与治理职责。"),
        ("MCP", "连接客户端与工具、资源提供方的协议。相关能力如何进入执行循环并受权限策略约束，仍由 harness 决定。"),
    ],

    fw_h="ETCSLV：Agent Harness 的六类运行时功能",
    fw_intro="ETCSLV 概括了公开 harness 架构中反复出现的六类职责，用于定位各项职责的实现位置，而非衡量系统成熟度。",
    functions=[
        ("E", "执行循环", "编排模型调用与动作执行，判定终止条件，并处理重试、任务委派与故障恢复。"),
        ("T", "工具注册表", "定义模型可调用的动作及其参数模式、路由、结果处理与执行契约。"),
        ("C", "上下文管理器", "为每次模型调用筛选并转换指令、历史记录、观察结果、检索内容与摘要。"),
        ("S", "状态存储", "跨轮次与进程重启持久化对话、工作区、检查点、记忆与待执行操作。"),
        ("L", "生命周期钩子", "在执行步骤前后施加权限、审批、凭据、沙箱与审计控制。"),
        ("V", "评测接口", "向评测器提供执行轨迹、中间状态、结果、成本与配置元数据。"),
    ],
    step_alt="工具调用执行路径的状态机：观察、调用模型、分发工具、等待结果与提交状态，工具出错时进入重试分支。",
    step_cap="一条工具调用执行路径：观察、调用模型、分发工具、等待结果并提交状态，工具出错时重试。各泳道标示每个状态所对应的 ETCSLV 功能。",
    hist_h="历史演进",
    hist_text="当代 harness 汇聚了三条脉络中的运行时思想：软件测试 harness、交互式环境与大语言模型智能体架构。",
    hist_alt="从软件测试、交互式环境到智能体架构，直至当代 agent harness 的代表性工作时间线。",
    hist_cap="按历史阶段列出的代表性工作，呈现执行控制、工具使用与状态管理如何逐渐成为共同关切。",

    sys_h="34 个 Agent Harness 系统的比较",
    sys_intro="本文依据第一方文档与源代码，按 ETCSLV 六类功能对 34 个系统进行编码。每项评分均记录来源、版本或提交、访问日期与置信度。数据快照日期：2026 年 10 月 12 日。",
    land_alt="五组运行时系统与四类相邻分析单元。",
    land_cap="五组运行时系统构成 34 个系统的比较集；能力模块、协议与沙箱基础设施、评测基础设施及任务环境作为独立的分析单元处理。",
    findings_h="主要发现",
    findings=[
        ("34 / 34", "E", "34 个系统均有执行循环的文档记录；这一结果由收录标准所决定。"),
        ("14 · 18 · 2", "V", "评测接口是区分度最高的功能：14 个系统评为完整，18 个为部分，2 个尚未核实。"),
        ("3 ≠ 1", "S · V", "对话记录、可恢复会话与可复用的评测接口服务于不同目的，因此分别评分。"),
    ],
    cases_h="四个重点系统",
    cases=[
        ("Claude Code", "产品层", "将代码仓库检索、编辑、命令执行与子智能体委派整合为统一的编程工作流。该案例说明上下文选择与动作审批如何塑造从任务目标到通过测试的代码修改这一路径。"),
        ("Codex", "运行时层", "通过执行循环衔接模型事件与工具事件，并提供持久化的执行记录（rollout）、审批与沙箱控制。该案例聚焦于跨客户端界面的可恢复状态。"),
        ("DeepSeek Harness", "插件层", "通过插件、配置方案与补丁暴露运行时组件。该案例关注组件边界以及受控的运行时修改。"),
        ("OpenClaw", "网关层", "通过网关协调通信渠道、持久会话与定时任务。该案例将分析延伸至跨交互持续存在的身份、状态与权限。"),
    ],
    cases_sum="四个系统将同一功能置于不同层级：产品、运行时、插件或网关。因此，仅凭系统名称无法确定产生某一结果的具体配置。",
    matrix_h="证据编码比较矩阵",
    search_label="检索系统", search_ph="按系统名称搜索", group_label="类别", all_groups="全部类别",
    rating_label="包含评分", any_rating="任意评分",
    categories={"anchor": "重点系统", "coding": "编程 harness", "runtime": "通用智能体运行时", "persistent": "持久型、上层编排型与运维型 harness", "workplace": "办公与个人智能体 harness"},
    ratings={"Full": "完整", "Partial": "部分", "Absent": "明确缺失", "Unverified": "尚未核实"},
    legend={"Full": "内置能力且有文档证明", "Partial": "能力有限、可选或由官方扩展提供", "Absent": "第一方材料明确说明不具备", "Unverified": "公开材料不足"},
    legend_note="评分反映有文档证明的组件覆盖情况，不代表产品质量或采用程度。",
    expand="展开全部类别", collapse="收起全部类别",
    th_system="系统", th_evidence="证据",
    comp_names={"E": "执行循环", "T": "工具注册表", "C": "上下文管理器", "S": "状态存储", "L": "生命周期钩子", "V": "评测接口"},
    show_ev="查看来源", hide_ev="收起来源", source="来源", version="版本", accessed="访问日期",
    confidence={"high": "高置信度", "medium": "中置信度", "low": "低置信度"},
    evidence_types={"first-party source/docs": "第一方源代码与文档", "first-party architecture documentation": "第一方架构文档", "first-party product documentation": "第一方产品文档"},
    matrix_region="系统证据矩阵（可横向滚动）",
    cov_summary="组件覆盖总览图",
    cov_alt="34 个系统在执行循环、工具注册表、上下文管理器、状态存储、生命周期钩子与评测接口上的覆盖情况。",
    cov_cap="行为系统，列为 ETCSLV 功能。F、P、A、? 分别表示完整、部分、明确缺失与尚未核实。",
    download="下载矩阵数据（JSON）",

    eng_h="工具治理与多智能体协同",
    tool_h="工具治理", tool_alt="从注册到恢复的工具治理各阶段。",
    tool_cap="工具治理覆盖注册、选择、分发、执行、结果处理与恢复等阶段。接口契约、授权、隔离与结果校验分别作用于其适用的阶段。",
    coord_h="协同模式", coord_alt="按运行时职责比较的多智能体协同模式。",
    coord_cap="依据身份、权限、共享状态与记录的归属位置比较各类协同模式。",

    eval_h="Agent Harness 的评测",
    eval_intro="本文将评测文献归纳为六个方向。各方向涵盖基准、方法与平台，分别回应不同的研究问题。",
    attr_alt="智能体评测中归因误差的三类来源及其控制手段。",
    attr_cap="智能体评测中归因误差的三类来源（环境漂移、任务歧义与 harness 配置）及相应的控制手段。",
    q_h="三类评测问题",
    questions=[
        ("配置比较", "在声明的实验条件下，哪一完整配置表现更优？"),
        ("组件研究", "在其余条件保持不变时，改变单一机制会带来何种变化？"),
        ("轨迹审计", "权限、状态转移、工具结果与完成声明是否与环境中实际发生的情况相符？"),
    ],
    report="报告 harness 实验结果时，应说明模型与运行时版本、任务环境、工具与审批设置、预算及执行记录，并同时报告成本、恢复行为与策略合规情况。",
    areas_h="六个评测方向",
    areas=[
        ("effects", "Harness 效应", "在固定模型与任务的条件下，比较不同运行时配置，或隔离单个组件的作用。"),
        ("evolution", "Harness 演化与持续评测", "在工具、技能、会话或运行时组件发生变化时，测量系统的适应与保持能力。另有五项相关工作见下表。"),
        ("lifecycle", "生命周期、安全与审计", "考察权限控制、攻击影响与恢复能力，以及执行记录能否支持独立核查。"),
        ("longhorizon", "长时循环与恢复", "检验持续推进能力、累积的待履行事项，以及部分失败后的恢复能力。"),
        ("protocol", "协议与工具基础", "分别评测协议一致性、工具选择、工具执行与经核验的实际效果。"),
        ("infra", "评测基础设施", "提供可重复的运行、可替换的智能体与环境、执行轨迹以及评分器。"),
    ],
    task_env="OSWorld、WebArena、GAIA 与 SWE-bench 等任务环境衡量的是完整配置系统的表现；若要隔离 harness 效应，还需引入额外的控制条件。",
    evo_h="Harness 演化：改变的对象",
    evo_th=("工作", "改变对象", "研究问题"),
    evo_rows=[
        ("SkillOpt", "skillopt", "可复用的技能文本", "如何利用 rollout 反馈指导对技能的持久修改？"),
        ("Meta-Harness", "metaharness", "可执行的 harness 代码", "如何利用执行轨迹与任务得分指导对运行时实现的搜索？"),
        ("AutoHarness", "autoharness", "任务特定的 harness 与策略代码", "如何利用环境反馈生成用于校验动作的代码？"),
        ("EvoHarnessBench", "evobench", "工具、技能与智能体配置", "如何跨阶段测量适应与保持能力？"),
        ("TaoLive", "taolive", "模型权重与运行时组件", "模型训练如何与持续变化的 harness 相互作用？"),
    ],

    agenda_h="开放问题",
    agenda=[
        ("配置效应", "在条件匹配的实验中，测量模型、harness、环境与策略之间的交互作用。"),
        ("状态连续性", "检验哪些状态能够在上下文压缩、重启、冲突、权限撤销与删除之后得以保留。"),
        ("独立评测", "将执行轨迹与环境中的实际结果，以及智能体无法操控的外部记录相互对应。"),
        ("有边界的演化", "在留出任务、分布外任务、回归任务与安全任务上评测带版本标识的 harness 修改。"),
    ],

    cite_h="引用",
    cite_note="请引用已归档的预印本版本。",
    copy="复制", copied="已复制。", copy_fail="复制失败，请手动选择文本。",

    footer="本综述的官方项目主页。代码、数据与持续维护的证据索引见：",
    count_tpl="{n} / {total} 个系统",
)
