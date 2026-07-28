package com.healthsphere.backend.file;

import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface FileService {

    FileResponse uploadFile(MultipartFile file);

    Resource downloadFile(String fileName);

    void deleteFile(String fileName);

    List<String> listFiles();
}