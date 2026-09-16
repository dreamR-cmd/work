// 简历全部文案集中在此，改内容只需改这个文件
export const profile = {
  name: '温少豪',
  role: 'Java 后端开发工程师',
  subRole: 'AI 应用开发',
  brief:
    '3 年 Java 后端开发经验，深耕 Spring Cloud 微服务、高并发与分布式数据一致性，主导过千万级数据迁移；同时具备企业级 RAG 知识库问答系统从 0 到 1 的落地经验，是兼具后端工程能力与 AI 应用经验的开发者。',
  phone: '13727245713',
  email: '1959977562@qq.com',
  location: '广东 · 佛山',
}

export const navSections = [
  { id: 'about', label: '关于我' },
  { id: 'skills', label: '技术栈' },
  { id: 'experience', label: '工作经历' },
  { id: 'projects', label: '项目经历' },
  { id: 'education', label: '教育背景' },
]

const iconCloud = `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19a4.5 4.5 0 0 0 0-9 6.5 6.5 0 0 0-12.7 1.5A4 4 0 0 0 6 19z"/></svg>`
const iconDb = `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>`
const iconBolt = `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h7l-1 8 10-12h-7z"/></svg>`
const iconBrain = `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a3 3 0 0 0-3 3v1a3 3 0 0 0-3 3 3 3 0 0 0-1 5.8A3 3 0 0 0 8 21h1a3 3 0 0 0 3-3zM12 3a3 3 0 0 1 3 3v1a3 3 0 0 1 3 3 3 3 0 0 1 1 5.8A3 3 0 0 1 16 21h-1a3 3 0 0 1-3-3z"/></svg>`

export const advantages = [
  {
    icon: iconCloud,
    title: '微服务与高并发',
    text: '3 年 Java 后端开发经验，熟练掌握 Spring Boot / Spring Cloud 微服务体系，具备高并发系统设计与调优能力。',
  },
  {
    icon: iconDb,
    title: '数据迁移与一致性',
    text: '核心参与千万级数据迁移与多租户跨库事务一致性方案落地，熟悉 Canal / DataX / Seata 等同步与事务组件。',
  },
  {
    icon: iconBolt,
    title: 'SQL 与性能调优',
    text: '擅长 SQL 性能调优，熟悉分布式锁、缓存策略、限流降级等手段，能在复杂业务场景下平衡系统性能与数据一致性。',
  },
  {
    icon: iconBrain,
    title: 'AI 应用落地',
    text: '具备企业级 RAG 知识库问答系统从 0 到 1 的搭建经验，熟悉检索增强生成、向量检索、Function Calling；日常深度使用 Cursor、Claude Code 等 AI 编程工具。',
  },
]

export const skillGroups = [
  { title: '编程语言 & 框架', tags: ['Java', 'Spring Boot', 'Spring Cloud', 'Gateway', 'Nacos', 'OpenFeign', 'MyBatis-Plus', 'Flowable'] },
  { title: '数据库 & 中间件', tags: ['MySQL', 'Redis', 'Redisson', 'RocketMQ', 'XXL-JOB'] },
  { title: '数据同步 & 分布式事务', tags: ['Canal', 'DataX', 'Seata'] },
  { title: 'AI 应用开发', tags: ['RAG 检索增强', '向量检索', 'Function Calling', 'LangChain4j', 'Cursor', 'Claude Code'] },
]

export const experience = {
  company: '广东新睿智能系统有限公司',
  role: '软件开发工程师',
  time: '2023.09 – 至今',
  points: [
    { title: '业务项目全链路交付', text: '负责美的模具智能系统、ERP、SaaS 平台、模具设备商城后端开发与运维；独立完成需求梳理、接口设计、开发测试直至上线运维闭环交付，服务美的、吉利、科沃斯等多家制造行业客户。' },
    { title: '核心业务模块建设', text: '实现模具生产预警、库存盘点、财务核算、动态权限、可视化看板等业务模块；完成接口开发、数据库层设计、权限校验与全局异常处理，适配多部门多角色复杂业务流转。' },
    { title: '性能瓶颈专项优化', text: '面对 600 万级数据表查询、高并发下单场景，落地 SQL 索引优化、Redis 缓存、分布式锁、接口限流等手段，缓解慢查询问题，保障并发场景下业务数据一致性，减少线上故障频次。' },
    { title: 'AI 技术探索与落地', text: '基于 LangChain 从零搭建企业私有知识库问答应用，解析导入业务文档，实现自然语言问答检索，减少业务人员翻阅文档的时间，提升内部业务查询效率。' },
  ],
}

export const projects = [
  {
    name: '模具智能管理系统（MES）',
    badge: '核心开发',
    tags: ['SaaS 多租户', 'Canal + DataX', 'Seata', 'RAG / Function Calling', 'Redis 分片队列'],
    desc: '面向美的、吉利、科沃斯等头部制造企业及其下属制造基地的模具全生命周期管理平台：通过工业采集器接入注塑机等机台数据（模次、机台状态、工艺参数），实现模具台账、使用追溯、保养预警、维修与报废的全流程管理，帮助企业延长模具寿命、减少非计划停机。',
    stats: [
      { value: '30+', label: '落地制造企业' },
      { value: '10 万+', label: '在管模具' },
      { value: '6000 万', label: '迁移数据（条）' },
      { value: '<2 分钟', label: '迁移停写窗口' },
      { value: '15s → 1s', label: '深分页查询优化' },
    ],
    points: [
      { title: '深分页查询优化', text: '针对 600 万+ 数据量业务表的深分页问题，通过「覆盖索引 + 游标分页」替代传统 Offset 分页，避免大 Offset 导致的回表与全表扫描，查询响应时间由 15 秒优化至 1 秒以内。' },
      { title: '千万级数据迁移', text: '采用 DataX 完成历史数据全量迁移，通过 Canal 监听 MySQL Binlog 并借助 RocketMQ 实现增量同步，以 tenantId Hash 路由保证租户内消息有序；经增量追平、数据校验及短暂停写窗口完成整体切换，实现总库向租户分库的平滑迁移。涉及 30 张表、6000 万条数据，停写窗口控制在 2 分钟内，业务基本无感知。' },
      { title: '多租户跨库事务一致性', text: 'SaaS 按租户分库、另有全局总库，部分业务需同时写两边；基于 @DS 动态切换数据源，引入 Seata AT 模式协调跨库写入，各库建 undo_log 实现自动回滚；针对数据导入等大事务场景，拆分为批量小事务并将非核心写操作异步化（本地消息表 + MQ），规避 AT 全局锁竞争与 undo_log 膨胀问题。' },
      { title: 'AI 客服 RAG 问答系统', text: '独立负责 AI 客服模块的设计与实现，基于 LangChain 搭建企业知识库 RAG 问答系统，整合 MES 系统数据及产品说明书等内容，使用向量数据库实现语义检索，并基于 Function Calling 实现大模型对内部工具及接口的调用，显著提升回答准确率。' },
      { title: '高并发消息分片消费', text: '基于 Redis List 构建多分片队列，设计 writerId 哈希分片 + 多单线程执行桶模型，将设备上报数据的处理从单点串行改为并行消费；同一采集器消息严格保序，不同采集器互不阻塞。' },
      { title: '消息不丢失与限流适配设计', text: '通过 Lua 脚本原子执行「取消息 + 写租约」，配合租约恢复调度器与幂等机制（业务唯一 ID + Redis SETNX）保证消息唯一性，上线以来未出现消息丢失或重复生效；引入令牌桶控速 + 队列缓冲削峰填谷，积压超阈值消息转入类死信队列并触发告警。' },
    ],
  },
  {
    name: '企业 ERP 系统',
    badge: '核心开发',
    tags: ['Flowable 审批流', '本地消息表', 'RocketMQ', 'Redisson', '延迟队列'],
    desc: '公司核心 ERP 系统，打通商城订单、采购、库存、财务全链路业务：商城订单自动触发库存扣减与采购补货，财务侧自动生成对账数据，替代原先人工录单、人工对账的模式，服务公司多部门日常核心业务运转。',
    stats: [],
    points: [
      { title: '审批流引擎设计', text: '基于 Flowable 设计并实现可动态配置的多级审批流，将审批节点、审批人、流转条件从代码中解耦，管理人员可通过后台自行配置采购、报销等流程模板，无需发版即可调整审批规则。' },
      { title: '系统集成对接', text: '对接商城系统，扣减库存成功后本地事务保存订单 + 本地消息表，经 RocketMQ 异步落 ERP/MySQL；以订单号 + DB 唯一索引实现幂等，失败阶梯重试 + 死信告警兜底，保证 Redis 扣减与最终落库一致。' },
      { title: '库存并发控制', text: '针对商城订单并发提交导致的库存超卖问题，引入 Redisson 分布式锁将「校验剩余库存 + 扣减」封装为原子操作，从源头杜绝超卖；扣减成功后通过 RocketMQ 异步同步至数据库，保证缓存与数据库最终一致，上线后超卖问题零发生。' },
      { title: '订单超时自动处理', text: '采用 XXL-JOB 定时兜底扫描 + RocketMQ 延迟队列实现订单超时自动处理，下单后进入 2 小时延迟队列，超时未确认自动触发取消 / 释放库存，避免逐单轮询扫库带来的数据库压力。' },
    ],
  },
]

export const education = {
  school: '广州大学华软软件学院',
  major: '计算机科学与技术 · 全日制本科',
  time: '2019.09 – 2023.07',
}
