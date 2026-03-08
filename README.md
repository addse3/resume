# 个人简历网站

这是一个现代化的个人简历网站，专为 GitHub Pages 设计。

## 📋 项目介绍

本项目是一个响应式的个人简历网页，采用简洁现代的设计风格，包含以下模块：

- **教育背景** - 学历信息展示
- **核心课程** - 相关专业课程
- **专业技能** - 技术栈与能力展示
- **项目经历** - 个人项目详细介绍
- **个人优势** - 核心竞争力说明
- **职业愿景** - 职业规划与期望
- **资质认证** - 证书与资质证明

## 🚀 部署到 GitHub Pages

### 方法一：直接推送（推荐）

1. **创建 GitHub 仓库**
   ```bash
   # 在 GitHub 上创建一个新仓库，例如：resume
   ```

2. **初始化本地仓库并推送**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Resume website"
   git branch -M main
   git remote add origin https://github.com/addse3/resume.git
   git push -u origin main
   ```

3. **配置 GitHub Pages**
   - 进入 GitHub 仓库页面
   - 点击 **Settings** → **Pages**
   - 在 **Source** 下选择：
     - Branch: `main`
     - Folder: `/ (root)`
   - 点击 **Save**

4. **访问简历网站**
   - 等待几分钟，GitHub 会自动构建
   - 访问：`https://addse3.github.io/resume/`

### 方法二：使用 GitHub Desktop

1. 打开 GitHub Desktop
2. 将项目文件夹拖入 GitHub Desktop
3. 创建新仓库并提交
4. 发布到 GitHub
5. 按照方法一的步骤 3 配置 Pages

## 🎨 自定义修改

### 修改个人信息

编辑 `index.html` 文件，找到对应的内容进行修改：

- 姓名、联系方式等基本信息
- 教育背景、项目经历等详细内容
- GitHub 链接等外部链接

### 调整样式

编辑 `styles.css` 文件：

- 修改主题色（搜索 `#667eea` 和 `#764ba2`）
- 调整字体大小、间距等
- 修改响应式断点

### 增强交互

编辑 `script.js` 文件：

- 添加新的动画效果
- 修改现有的交互逻辑
- 添加统计代码等

## 📱 特性

- ✅ **响应式设计** - 完美适配手机、平板、电脑
- ✅ **现代 UI** - 渐变色、卡片式布局
- ✅ **流畅动画** - 滚动动画、悬停效果
- ✅ **打印优化** - 支持一键打印简历
- ✅ **SEO 友好** - 语义化 HTML 标签
- ✅ **零依赖** - 纯 HTML/CSS/JS，无需构建工具

## 🛠️ 技术栈

- **HTML5** - 语义化结构
- **CSS3** - 现代样式与动画
- **JavaScript** - 原生交互效果
- **Google Fonts** - Noto Sans SC 中文字体

## 📄 文件结构

```
ResumePages/
├── index.html          # 主页面
├── styles.css          # 样式文件
├── script.js           # 脚本文件
└── README.md           # 说明文档
```

## 🌟 高级功能

### 添加访问量统计

在 `index.html` 的底部添加：

```html
<!-- 在 footer 标签内添加 -->
<script async src="https://pages.github.com/widgets/v1.js"></script>
```

### 添加社交媒体链接

在头部联系信息区域添加更多链接：

```html
<a href="mailto:your-email@example.com" class="contact-link">
    📧 your-email@example.com
</a>
```

### 添加下载简历功能

```html
<a href="resume.pdf" download class="contact-link" style="margin-left: 10px;">
    📥 下载 PDF 简历
</a>
```

## 📝 注意事项

1. **域名自定义**（可选）
   - 在 GitHub Pages 设置中可以绑定自定义域名
   - 添加 CNAME 文件指向你的域名

2. **HTTPS 强制**
   - 建议在 Settings → Pages 中开启 "Enforce HTTPS"

3. **更新内容**
   ```bash
   git add .
   git commit -m "Update resume content"
   git push
   ```

4. **预览测试**
   - 本地直接用浏览器打开 `index.html` 即可预览
   - 或使用 VS Code 的 Live Server 插件

## 🎯 下一步

1. ✏️ 根据实际情况调整内容细节
2. 🎨 可选：调整配色方案
3. 📤 推送到 GitHub 并启用 Pages
4. 🔗 将简历链接添加到 GitHub 主页、招聘平台

## 📞 技术支持

如有问题，欢迎通过以下方式联系：

- GitHub Issues: 提交 Issue
- GitHub: [@addse3](https://github.com/addse3)

---

**祝你求职顺利！🎉**
