// ============================================================
// 🎨 カスタムアプリ設定 - 自由に変更可能
// ============================================================

export const APP_CONFIG = {
    // アプリの基本情報（自由に変更可能）
    name: "部屋片付け管理アプリ",
    version: "1.0",
    description: "Firebase + Google認証による部屋片付け進捗管理アプリ",
    
    // デフォルト値設定（カスタマイズ可能）
    defaults: {
        room: "リビング",
        status: "未着手",
        task: "整理整頓"
    },
    
    // UI設定（カスタマイズ可能）
    ui: {
        theme: {
            primaryColor: "#007bff",
            secondaryColor: "#6c757d",
            successColor: "#28a745",
            backgroundColor: "#f8f9fa"
        },
        
        // 進捗状況ボタン（自由に変更・追加可能）
        statusButtons: [
            { id: "not_started", label: "📋 未着手", color: "#6c757d" },
            { id: "planning", label: "📝 計画中", color: "#ffc107" },
            { id: "in_progress", label: "🔄 進行中", color: "#17a2b8" },
            { id: "half_done", label: "⚡ 半分完了", color: "#fd7e14" },
            { id: "almost_done", label: "🎯 ほぼ完了", color: "#20c997" },
            { id: "completed", label: "✅ 完了", color: "#28a745" }
        ],
        
        // キーボードショートカット設定（カスタマイズ可能）
        keyboard: {
            nextStatus: "ArrowUp",     // 次の進捗状況
            prevStatus: "ArrowDown",   // 前の進捗状況
            save: "Enter",             // データ保存
            complete: "Space"          // 完了切替
        },
        
        // 表示設定
        display: {
            maxHistoryItems: 10,       // 履歴表示件数
            dateFormat: "YYYY-MM-DD",  // 日付形式
            timeFormat: "HH:mm"        // 時刻形式
        }
    },
    
    // データ設定（カスタマイズ可能）
    data: {
        // Firebase Collection名（変更する場合は注意）
        collection: "cleanup_tasks",
        
        // 必須フィールド
        requiredFields: ["room", "task", "status", "date", "time"],
        
        // オプションフィールド
        optionalFields: ["memo", "userEmail"]
    }
};

// デバッグ設定（開発時のみ有効にする）
export const DEBUG_CONFIG = {
    enabled: true,  // false にすると全デバッグ機能が無効
    features: {
        console: true,      // コンソール出力
        copyButtons: true,  // コピーボタン
        apiLogs: true,      // API通信ログ
        userActions: true   // ユーザー操作ログ
    }
};