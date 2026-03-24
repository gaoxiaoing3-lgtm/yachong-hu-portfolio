#!/bin/bash
# 修复React导入

cd /Users/jingqi/openclaw/portfolio-website

# 修复main.tsx - 需要React作为值
sed -i '' 's/import type React/import React/g' src/main.tsx

# 修复其他文件 - 移除未使用的React导入
for file in src/**/*.tsx; do
    # 检查是否使用了React
    if grep -q "React\." "$file" || grep -q "<[A-Z]" "$file" || grep -q "from 'react'" "$file"; then
        # 使用了React，确保正确导入
        if grep -q "^import type React" "$file"; then
            sed -i '' 's/^import type React/import React/g' "$file"
        fi
    else
        # 未使用React，可以移除导入
        sed -i '' '/^import React/d' "$file"
    fi
done

# 特殊处理Contact.tsx和Portfolio.tsx
sed -i '' 's/^import type React, { useState }/import { useState }/g' src/pages/Contact.tsx
sed -i '' 's/^import type React, { useState }/import { useState }/g' src/pages/Portfolio.tsx

echo "✅ React导入已修复"