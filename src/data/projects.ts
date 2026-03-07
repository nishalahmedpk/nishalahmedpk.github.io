export interface Project {
  id: string;
  title: string;
  description: string;
  tags?: string[];
  githubUrl?: string;
  readme?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Nuclei Instance Segmentation",
    description: "A generalized deep learning approach for multi-organ nuclei segmentation using U-Net variants and Mask R-CNN with novel vague-region-aware loss weighting.",
    tags: ["Deep Learning", "Medical Imaging"],
    githubUrl: "https://github.com/nishalahmedpk/generalized-nuclei-instance-seg",
    readme: `# Generalized Nuclei Instance Segmentation

A deep learning pipeline for multi-organ nuclei instance segmentation in histopathology images, featuring novel vague-region-aware loss weighting for Mask R-CNN.

## Architectures

### 1. Shallow U-Net (Baseline)
- 4-layer encoder-decoder with skip connections
- Predicts binary masks and distance transform maps
- 5-fold cross-validation

### 2. Dual-Decoder U-Net (DDUNet)
- Shared encoder with two specialized decoders
- Decoder 1: Binary segmentation masks
- Decoder 2: Distance transform maps

### 3. Mask R-CNN
- **Standard Mask R-CNN**: Pretrained ResNet-50 backbone with FPN
- **Vague-Region-Aware Mask R-CNN**: Novel contribution that applies **spatially-aware loss weighting** using RoI-aligned vague masks (weight 0.7 for vague areas vs 1.0 for clear regions)

## Dataset

**NuInsSeg (Nuclei Instance Segmentation Dataset)**
- Multi-organ histopathology images
- Includes tissue images (RGB), binary masks, distance transform maps, instance label masks, and **vague region annotations**

## Key Findings

### Post-Processing Analysis
- ✅ Marginal improvements in AJI for watershed variants
- ❌ Negative impact on Dice coefficient and Panoptic Quality
- **Root cause**: Over-segmentation of nuclei

### Vague-Region Handling
- Spatially-aware loss weighting for Mask R-CNN
- Per-pixel weighting: vague regions (0.7) vs clear regions (1.0)
- Slight improvements in AJI and PQ metrics

## Results Summary

| Model | Post-Processing | Dice (%) | AJI (%) | PQ (%) |
|-------|----------------|----------|---------|--------|
| Shallow U-Net | None | 78.8 | 50.5 | 42.7 |
| Shallow U-Net | Watershed | 78.08 | 46.60 | 37.24 |
| Mask R-CNN | Standard | 81.04 | 59.95 | 60.95 |
| Mask R-CNN | Vague-aware | 80.82 | 59.91 | 61.01 |

## Technical Stack
- **Deep Learning**: TensorFlow/Keras, PyTorch
- **Image Processing**: OpenCV, scikit-image
- **Platform**: Kaggle (NVIDIA Tesla P100)

## Key Contributions

1. Systematic reproduction of published shallow U-Net baselines
2. Empirical evidence that watershed post-processing can harm overall quality
3. Novel spatially-aware loss weighting for Mask R-CNN
4. Comprehensive evaluation using Dice, AJI, and PQ metrics

---

**Author**: Nishal Ahmed P. K.
**Institution**: Birla Institute of Technology and Science, Pilani – Dubai`,
  },
  {
    id: "2",
    title: "AI Chat Assistant",
    description: "A conversational AI assistant built with transformer models and real-time streaming responses.",
    tags: ["Artificial Intelligence", "NLP"],
    githubUrl: "https://github.com/nishal/ai-chat",
    readme: `# AI Chat Assistant\n\nA conversational AI assistant powered by transformer models.\n\n## Features\n\n- Real-time streaming responses\n- Context-aware conversations\n- Multi-language support\n- Custom model fine-tuning\n\n## Tech Stack\n\n- Python / FastAPI\n- React / TypeScript\n- WebSocket streaming\n- Docker deployment`,
  },
  {
    id: "3",
    title: "Code Review Bot",
    description: "Automated code review tool that analyzes PRs and suggests improvements using static analysis.",
    tags: ["DevTools", "Automation"],
  },
  {
    id: "4",
    title: "Fitness Tracker",
    description: "Track workouts, cycling routes, and lifting progress with detailed analytics and charts.",
    tags: ["Health", "Data Viz"],
    githubUrl: "https://github.com/nishal/fitness-tracker",
  },
];
